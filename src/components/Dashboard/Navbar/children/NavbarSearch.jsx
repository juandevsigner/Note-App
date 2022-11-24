import { Input } from "antd";
const { Search } = Input;
const NavbarSearch = () => {
  const onSearch = value => console.log(value);
  return (
    <Search
      className="navbar__search"
      placeholder="Search a note"
      onSearch={onSearch}
    />
  );
};

export default NavbarSearch;
