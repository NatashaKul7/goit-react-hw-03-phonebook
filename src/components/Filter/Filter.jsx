import { FilterBox } from './Filter.styled';

export const Filter = ({ name, onChange }) => {
  return (
    <FilterBox>
      <p>Find contact by name</p>
      <input type="text" name="name" value={name} onChange={onChange} />
    </FilterBox>
  );
};
