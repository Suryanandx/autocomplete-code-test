import * as React from 'react'
import PropTypes from 'prop-types'
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { InputWrapper, Label, Listbox, Root, StyledTag } from './Styles';
import axios from 'axios';


export function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};



function App() {

  const [movies, setMovies] = React.useState([])

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'movies-hook',
    multiple: true,
    options: movies,
    getOptionLabel: (option) => option.title,
  });

  React.useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=9842b9e03e6feab7851d163a69da25de').then(data => {
      setMovies(data.data.results)
    })
  }, [])

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
         <Root>
    <div {...getRootProps()}>
      <Label {...getInputLabelProps()}>Search Movies </Label>
      <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
        {value.map((option, index) => (
          <StyledTag label={option.title} {...getTagProps({ index })} />
        ))}

        <input {...getInputProps()} />
      </InputWrapper>
    </div>
    {groupedOptions.length > 0 ? (
      <Listbox {...getListboxProps()}>
        {groupedOptions.map((option, index) => (
          <li {...getOptionProps({ option, index })}>
            <span>{option.title}</span>
            <CheckIcon fontSize="small" />
          </li>
        ))}
      </Listbox>
    ) : null}
  </Root>
    </div>
 
  )
}

export default App