
export const Dropdown = () => {
    return (
      <sit-dropdown variant="secondary">
      <sit-button slot="toggler" role="button">
        Dropdown
        <sit-icon name="chevron-down" slot="rightIcon"></sit-icon>
      </sit-button>
      <sit-dropdown-item>
        <a href="#">item #1 (argsTable controlled) </a>
      </sit-dropdown-item>
      <sit-dropdown-item><a href="https://google.com">item #2</a></sit-dropdown-item>
      <sit-dropdown-item disabled="">item #3</sit-dropdown-item>
      <sit-dropdown-item>item #4</sit-dropdown-item>
      <sit-dropdown-item>item #5</sit-dropdown-item>
      <sit-dropdown-item>item #6</sit-dropdown-item>
      <sit-dropdown-item>item #7</sit-dropdown-item>
      <sit-dropdown-item>item #8</sit-dropdown-item>
      <sit-dropdown-item>item #9</sit-dropdown-item>
      <sit-dropdown-item>item #10</sit-dropdown-item>
      <sit-dropdown-item>item #11</sit-dropdown-item>
    </sit-dropdown>
    )
}