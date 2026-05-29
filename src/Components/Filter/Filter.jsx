import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../Redux/filterSlice";
import s from " ./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={s.label}>
      Find contacts by name:
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type to search..."
        className={s.field}
      />
    </label>
  );
};

export default Filter;
