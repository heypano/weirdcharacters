import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

const [r, y, b, g, i] = [chalk.red, chalk.yellow, chalk.blue, chalk.green, chalk.inverse];

process.env.NODE_ENV = 'production';

console.log(b("Generating minified bundle at "+ webpackConfig.output.path + '/' + webpackConfig.output.filename));

webpack(webpackConfig).run((err, stats) => {
   if (err) {
       console.log(r(err));
       return 1;
   } else {
       const jsonStats = stats.toJson();

       if(jsonStats.hasErrors){
           return jsonStats.errors.map(error => console.log(r(error)));
       }

       if(jsonStats.hasWarnings){
           console.log(y("Webpack generated the following warnings"));
           jsonStats.warnings.map(warning => console.log(y(warning)));
       }

       console.log(`Webpack stats: ${stats}`);

       console.log(g('Your app has been built for production.'))

       return 0;
   }
});
