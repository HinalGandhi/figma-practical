import { createGlobalStyle } from 'styled-components';
import {  misc, variants, typography } from './config/theme.js';
import {
  classes,
  fontSizeClasses,
  fontWeightClasses,
  radiusClasses,
} from './config/utilities.js';

export const GlobalStyle = createGlobalStyle`
  :root { 
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  
  *, ::after, ::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background-color:  ${misc.background};
    color:${typography.main};
  }

  .center {
    display: grid;
    place-content: center;
  }

  /** For Debugging */
  .border {
    border: 1px solid ${variants.primary.main};
  }

  .pointer {
    cursor: pointer;
  }

  .icon {
    display: inline-flex;
    align-items: center;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: transform 0.3s;
  }

  /** AntD Global customization */
  .ant-btn {
    &.success {
      color: ${variants.success.main};
      border-color: ${variants.success.main};
      &:hover {
        color: ${variants.success.main} !important;
        border-color: ${variants.success.main} !important;
      }
    }
    &.secondary {
      color: ${variants.secondary.main};
      border-color: ${variants.secondary.main};
      &:hover {
        color: ${variants.secondary.main} !important;
        border-color: ${variants.secondary.main} !important;
      }
    }
    text-transform: uppercase;
    font-weight: 500;
    &-default {
      background-color: transparent;
    }
  }

  .ant-checkbox {
    color: ${typography.secondary};
    &-checked {
      & .ant-checkbox-inner {
        background-color: ${variants.primary.main} !important;
        border-color: ${variants.primary.main} !important;
      }
    }
    & .ant-checkbox-inner {
      background-color: transparent;
      border: 2px solid ${typography.secondary};
      height: 18px;
      width: 18px;
    }
  }

  .ant-tag {
    --color: ${variants.primary.main};
    background-color: var(--color);
    color:${typography.main};
    border-color: var(--color);
    font-weight: 500;
    &.primary {
      color: ${variants.primary.main} !important;
      background-color: rgb(59, 50, 93);
      border: none;
    }
    &.outlined {
      background-color: transparent !important;
      color: var(--color);
    }
    &.success {
      --color: ${variants.success.main};
    }
    &.warning {
      --color: ${variants.warning.main};
    }
    &.error {
      --color:  ${variants.error.main};
    }
    &.info {
      --color:  ${variants.info.main};
    }
    &.secondary {
      --color: ${variants.secondary.main};
    }
  }

  .ant-radio-wrapper {
    & .ant-radio-inner {
      background: transparent;
    }
  }

  .ant-badge {
    & .ant-badge-dot {
      box-shadow: none;
      height: 12px;
      width: 12px;
      border: 2px solid #312D4B;
    }
  }

  .ant-input-suffix {
    svg {
      color: #3A35418A;
      height: 20px;
      width: 22px;
    }
  }

  .ant-input-affix-wrapper {
    & .ant-input-prefix {
      margin-inline-end: 0;
    }
    > input.ant-input {
      padding: 16px 12px;
    }
  }

  .ant-input {
    padding: 16px 12px;
    &.filled {
      background-color: ${typography.hover};
    }
    &.standard {
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: 0;
      background: transparent;
    }
  }

  .ant-tabs {
    background-color: #312D4B;
    border-radius: 6px;
    &-tab-btn {
      font-weight: 500;
    }
    color: #E7E3FCAD;
    .ant-tabs-content-holder {
      padding: 0 20px 20px 20px;
    }
    &-tab {
      + .ant-tabs-tab {
        margin-left: 0 !important;
      }
    }
    &-tab-btn {
      padding: 0 16px;
    }
    &-nav {
      &::before {
        border: 1px solid #E7E3FC1F;
      }
      &-list {
        text-transform: uppercase;
      }
    }
  }
  .ant-tabs-top {
    > .ant-tabs-nav {
      &::before {
        border: 1px solid #E7E3FC1F;
      }
    }
  }

  .ant-select-dropdown {
    background-color: #312D4B;
  }
  .ant-select-item-option-selected {
    background-color: ${variants.primary.light} !important;
  }
  .ant-select-single { 
    &.ant-select-open {
      & .ant-select-selection-item {
        color: unset;
      }
    }
  }


  .ant-alert {
    border: none;
    border-radius: 5px;
    &-warning {
      &.ant-alert-with-description {
        & .ant-alert-message {
          color: ${variants.warning.main};
        }
      }
      color: ${variants.warning.main};
    }
  }

  .ant-collapse {
    border: none;
    border-radius: 0;
    & .ant-collapse-content {
      background-color: unset;
      border-top: none;
    }
    > .ant-collapse-item {
      border-bottom: 1px solid ${misc.divider};
    }
    &-item {
      border: 1px solid ${misc.divider};
      &:not(:last-child) {
        margin-bottom: 16px;
      }
      &:first-child {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }
      &:last-child  {
        border-bottom-left-radius: 6px !important;
        border-bottom-right-radius: 6px !important;
      }
    }
  }


  /** Utility classes */
  ${classes}
  ${radiusClasses}
  ${fontWeightClasses}
  ${fontSizeClasses}

  .text-primary {
    color: ${variants.primary.main};
  }

  .block {
    display: block;
  }
`;