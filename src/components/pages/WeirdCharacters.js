import React from "react";
import { connect } from "react-redux";
import { symbolSearch } from "../../redux/actions/navigation";
import { getSymbolSearchValue } from "../../redux/selectors/navigation";

const weirds = ["γ⃣", "γ̸̨̲̙̪̗̠̬̑̅̃͑̿̾", "γ⃝", "γ҉", "γ̶", "γ̴", "γ̷", "γ̲", "γ̳", "γ̾", "γ͎", "γ͓̽"];

/**
 * Print a weird text
 * @param text
 * @returns {*}
 * @constructor
 */
const WeirdText = ({ children }) => {
    const characters = [...children.toString()];

    return (
        <div className="weird-letter card">
            <div className="card-body">
                <div className="card-title">
                    <div className="row">
                        <div className="col-2">
                            <span className="weird-letter-content">
                                {children}
                            </span>
                        </div>
                        <div className="col weird-letter-parts">
                            {characters.map((char, i) => {
                                const hexCode = char.codePointAt(0).toString();
                                const html = `&#${hexCode};`;
                                return (
                                    <span className="weird-code" key={i}>
                                        <a
                                            href={`https://www.codetable.net/decimal/${hexCode}`}
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
    const { searchValue, onSymbolSearch } = props;
    console.log(searchValue);
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
                        <input onChange={onSymbolSearch} type="text" />
                    </div>
                    <div className="weird-letters">
                        {searchValue}
                        {!searchValue &&
                            weirds.map((text, index) => (
                                <WeirdText key={`char_${index}`}>
                                    {text}
                                </WeirdText>
                            ))}
                        {searchValue && <WeirdText>{searchValue}</WeirdText>}
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
    console.log("mapping", getSymbolSearchValue(state));
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
    return {
        onSymbolSearch: event => {
            dispatch(symbolSearch(event.target.value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeirdCharacters);
