import { styled } from "@mui/material/styles";
import { Tag } from "./App";
import { autocompleteClasses } from '@mui/material/Autocomplete';

export const Root = styled('div')(
    ({ theme }) => `
        color: ${

            theme.palette.mode === `dark` ? `rgba(255,255,255,0.65)` : `rgba(0,0,0,0.85)`
        };
        font-size: 14px;
    
    `
)

export const Label = styled('label')  `
        padding: 0 0 4px;
        line-height: 1.5;
        display: block;
 `


 export  const InputWrapper = styled('div')(
     ({theme }) => `
        width : 300px;
        border-radius: 4px;
        padding: 14px;
        padding: 1px;
        display: flex;
        flex-wrap: wrap;
        
        border: 1px solid ${theme.palette.mode === 'dark' ? `#434343` : '#d9d9d9'};
        background-color: ${theme.palette.mode === 'dark' ? `#141414` : '#fff'};

        &:hover {
            border-color: ${theme.palette.mode === 'dark' ? `#177ddc` : '#40a9ff'};

        }

        &.focused {
            border-color: ${theme.palette.mode === 'dark' ? `177ddc` : '#40a9ff'};
            box-shadow : 0 0 0 2px;

        }

        & input {
            background-color: ${theme.palette.mode === 'dark' ? `#141414` : '#fff'};
            color: ${theme.palette.mode === `dark` ? `rgba(255,255,255,0.65)` : `rgba(0,0,0,0.85)`};
            height: 30px;
            box-sizing: border-box;
            width: 0;
            min-width: 30px;
            flex-grow: 1;
            border: 0;
            margin: 0;
            outline: 0;
        }

    
     `,
 
 );

 export const StyledTag = styled(Tag)(
    ({ theme }) => `
    display: flex;
    align-items: center;
    height: 24px;
    margin: 2px;
    line-height: 22px;
    background-color: ${
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : '#fafafa'
    };
    border: 1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#e8e8e8'};
    border-radius: 2px;
    box-sizing: content-box;
    padding: 0 4px 0 10px;
    outline: 0;
    overflow: hidden;
  
    &:focus {
      border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
      background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    }
  
    & span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  
    & svg {
      font-size: 12px;
      cursor: pointer;
      padding: 4px;
    }
  `,
  );

  export const Listbox = styled('ul')(
    ({ theme }) => `
    width: 300px;
    margin: 2px 0 0;
    padding: 0;
    position: absolute;
    list-style: none;
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    overflow: auto;
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1;
  
    & li {
      padding: 5px 12px;
      display: flex;
  
      & span {
        flex-grow: 1;
      }
  
      & svg {
        color: transparent;
      }
    }
  
    & li[aria-selected='true'] {
      background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
      font-weight: 600;
  
      & svg {
        color: #1890ff;
      }
    }
  
    & li.${autocompleteClasses.focused} {
      background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
      cursor: pointer;
  
      & svg {
        color: currentColor;
      }
    }
  `,
  );
  
