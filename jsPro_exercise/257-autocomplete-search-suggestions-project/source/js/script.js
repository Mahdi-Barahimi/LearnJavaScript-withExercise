let searchInput = document.querySelector('input');
let autocomBox = document.querySelector('.autocom-box');
let searchDiv = document.querySelector('.search-input');
let suggestionFragmentLi = document.createDocumentFragment();
let suggestionFromInput = '';
let searchInputValue = searchInput.value;
let newSuggestionLi;
searchInput.addEventListener('keyup', function () {
    if (searchInput.value) {
        searchInputValue = searchInput.value;
        suggestionFromInput = suggestions.filter(function (suggestion) {
            return suggestion.toLowerCase().includes(searchInputValue.toLowerCase());
        })
        autocomBox.innerHTML = '';
        if (suggestionFromInput.length !== 0) {
            suggestionFromInput.forEach(function (suggestion) {
                newSuggestionLi = document.createElement('li');
                newSuggestionLi.innerHTML = suggestion;
                newSuggestionLi.addEventListener('click', function () {
                    searchInput.value = suggestion;
                    searchDiv.classList.remove('active');
                })
                suggestionFragmentLi.append(newSuggestionLi);
                searchDiv.classList.add('active');
            })
        } else {
            newSuggestionLi = document.createElement('li');
            newSuggestionLi.innerHTML = searchInput.value;
            newSuggestionLi.addEventListener('click', function () {
                searchDiv.classList.remove('active');
            })
            suggestionFragmentLi.append(newSuggestionLi);
            searchDiv.classList.add('active');
        }
        autocomBox.appendChild(suggestionFragmentLi);
    } else {
        autocomBox.innerHTML = '';
        searchDiv.classList.remove('active');
    }
})