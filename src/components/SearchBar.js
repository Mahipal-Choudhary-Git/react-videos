import { useState } from "react";

function SearchBar({ onFormSubmit }) {
    const [term, setTerm] = useState("Avengers");
    return (
        <div className="search-bar ui segment">
            <form
                className="ui form"
                onSubmit={(e) => {
                    e.preventDefault();
                    onFormSubmit(term);
                }}
            >
                <div className="feild">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
