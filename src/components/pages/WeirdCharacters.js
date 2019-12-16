import React from "react";
import { connect } from "react-redux";
import { symbolSearch } from "../../redux/actions/navigation";
import { getSymbolSearchValue } from "../../redux/selectors/navigation";
import MetaTags from "react-meta-tags";
import conversions from "../../util/textConversions";

const weirds = ["γ⃣", "γ⃝", "γ҉", "γ̶", "γ̴", "γ̷", "γ̲", "γ̳", "γ̾", "γ͎", "γ͓̽", "γ̸̨̲̙̪̗̠̬̑̅̃͑̿̾"];

/**
 * Print a weird text
 * @param children -- pass as children if simple case
 * @param text -- pass text if not
 * @returns {*}
 * @constructor
 */
const WeirdText = ({ children, htmlSafeText }) => {
    const string = htmlSafeText || children.toString();
    const characters = [...string];
    let description = "";
    return (
        <div className="weird-letter card">
            <div className="card-body">
                <div className="card-title">
                    <div className="row">
                        <div className="col-3">
                            {htmlSafeText && (
                                <span
                                    className="weird-letter-content"
                                    dangerouslySetInnerHTML={{
                                        __html: htmlSafeText
                                    }}
                                />
                            )}
                            {!htmlSafeText && (
                                <span className="weird-letter-content">
                                    {string}
                                </span>
                            )}
                        </div>
                        <div className="col weird-letter-parts">
                            {characters.map((char, i) => {
                                const hexCode = char.codePointAt(0).toString();
                                const html = `&#${hexCode};`;
                                const url = `https://www.codetable.net/decimal/${hexCode}`;
                                description += `${html} ${url}\n`;
                                return (
                                    <span className="weird-code" key={i}>
                                        {i == 0 && (
                                            <MetaTags>
                                                <meta
                                                    property="og:url"
                                                    content={url}
                                                />
                                            </MetaTags>
                                        )}
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: html
                                                }}
                                            />
                                        </a>
                                    </span>
                                );
                            })}
                            <MetaTags>
                                <meta property="og:title" content={string} />
                                <meta property="og:type" content="website" />
                                <meta
                                    property="og:image"
                                    content="https://placekitten.com/500/500"
                                />
                                <meta
                                    property="og:description"
                                    content={description}
                                />
                                <meta
                                    property="description"
                                    content={description}
                                />
                            </MetaTags>
                        </div>
                        <div className="col weird-letter-parts-numbers">
                            {characters.map((char, i) => {
                                const hexCode = char.codePointAt(0).toString();
                                return (
                                    <span
                                        key={i}
                                        className="weird-code-numbers"
                                    >
                                        <a
                                            href={`https://www.codetable.net/decimal/${hexCode}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            &#{hexCode};
                                        </a>{" "}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/**
 * React class to show some weirc characters
 */
const WeirdCharacters = props => {
    const { searchValue, onSymbolSearch, match } = props;
    const { urlSearchValue } = match.params;

    const query = searchValue || urlSearchValue;

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Weird Characters</h1>
                    <div className="search-area">
                        <div>
                            <a
                                href="https://www.ssec.wisc.edu/~tomw/java/unicode.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Related Info: Unicode ranges info
                            </a>
                        </div>
                        <label>Try some text:</label>
                        <div>
                            <textarea
                                className="w-100"
                                onChange={onSymbolSearch}
                                type="text"
                                defaultValue={query}
                            />
                        </div>
                    </div>
                    <div className="weird-letters">
                        {!query &&
                            weirds.map((text, index) => (
                                <WeirdText key={`char_${index}`} text={text}>
                                    {text}
                                </WeirdText>
                            ))}
                        {query && (
                            <>
                                <WeirdText>{query}</WeirdText>
                                {Object.keys(conversions).map((key, index) => {
                                    const htmlText = conversions[key](query);
                                    return (
                                        <WeirdText
                                            htmlSafeText={htmlText}
                                        ></WeirdText>
                                    );
                                })}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

/**
 * mapStateToProps returns the parts of the state that will be available as props
 * @param state
 * @param ownProps
 * @returns {}
 */
const mapStateToProps = (state, ownProps) => {
    return {
        searchValue: getSymbolSearchValue(state)
    };
};

/**
 * mapDispatchToProps exposes the actions we want to call as props
 * @param state
 * @returns {}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
    const { history } = ownProps;
    return {
        onSymbolSearch: event => {
            dispatch(symbolSearch(event.target.value, history));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeirdCharacters);
