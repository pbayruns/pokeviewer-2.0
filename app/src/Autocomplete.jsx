import React from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Downshift from 'downshift';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';


export default class Autocomplete extends React.Component {
  state = {
    inputValue: '',
    selectedItem: []
  };

  renderInput(inputProps) {
    const { InputProps, ref, ...other } = inputProps;

    return (
      <TextField
        InputProps={{
          inputRef: ref,
          ...InputProps,
        }}
        {...other}
      />
    );
  }

  renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || '').indexOf(suggestion.identifier) > -1;

    return (
      <MenuItem
        className="pokemon-name"
        {...itemProps}
        key={suggestion.id}
        selected={isHighlighted}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400,
        }}
      >
        {suggestion.identifier}
      </MenuItem>
    );
  }
  // renderSuggestion.propTypes = {
  //   highlightedIndex: PropTypes.number,
  //   index: PropTypes.number,
  //   itemProps: PropTypes.object,
  //   selectedItem: PropTypes.string,
  //   suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
  // };

  // Returns true if the given value contains the search term
  valueContainsSearch(search, value){
    return value.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  }

  pokemonMatchesSearch(search, pokemon) {
    // If the search text is empty, everything matches.
    if(!search){ 
      return true;
    }
    // Otherwise we have to search the pokemon for a match
    let nameMatches = this.valueContainsSearch(search, pokemon.identifier);
    let typeMatches = false;
    for(let i = 0; i < pokemon.types.length; i++){
      let type = pokemon.types[i].identifier
      if(this.valueContainsSearch(search, type) || this.valueContainsSearch(type, search)){
        typeMatches = true;
      }
    }
    return (nameMatches || typeMatches);
  }

  getSuggestions(searchText) {
    let suggestions_so_far = 0;
    const suggestion_limit = 5;
    return this.props.suggestions.filter(
      pokemon => {
        let isMatch = (suggestions_so_far < suggestion_limit) && this.pokemonMatchesSearch(searchText, pokemon);
        if(isMatch) { suggestions_so_far++; }
        return isMatch;
      }
    );
  }

  handleKeyDown = event => {
    const { inputValue, selectedItem } = this.state;
    if (selectedItem.length && !inputValue.length && keycode(event) === 'backspace') {
      this.setState({
        selectedItem: selectedItem.slice(0, selectedItem.length - 1),
      });
    }
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleChange = item => {
    let { selectedItem } = this.state;

    if (selectedItem.indexOf(item) === -1) {
      selectedItem = [...selectedItem, item];
    }

    this.setState({
      inputValue: '',
      selectedItem,
    });
  };

  handleDelete = item => () => {
    const selectedItem = [...this.state.selectedItem];
    selectedItem.splice(selectedItem.indexOf(item), 1);

    this.setState({ selectedItem });
  };

  render() {
    const { inputValue, selectedItem } = this.state;

    return (
      <Downshift inputValue={inputValue} onChange={this.handleChange} selectedItem={selectedItem}>
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue: inputValue2,
          selectedItem: selectedItem2,
          highlightedIndex,
        }) => (
            <div>
              {this.renderInput({
                fullWidth: true,
                InputProps: getInputProps({
                  startAdornment: selectedItem.map(item => (
                    <Chip
                      key={item}
                      tabIndex={-1}
                      label={item}
                      onDelete={this.handleDelete(item)}
                    />
                  )),
                  onChange: this.handleInputChange,
                  onKeyDown: this.handleKeyDown,
                  placeholder: 'Search anything',
                  id: 'integration-downshift-multiple',
                }),
              })}
              {isOpen ? (
                <Paper square>
                  {this.getSuggestions(inputValue2).map((suggestion, index) =>
                    this.renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion.identifier }),
                      highlightedIndex,
                      selectedItem: selectedItem2,
                    }),
                  )}
                </Paper>
              ) : null}
            </div>
          )}
      </Downshift>
    );
  };
}
