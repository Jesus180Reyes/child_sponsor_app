import { useChild } from '../../pages/child/hooks/useChild';

export const ChildAgeFilter = () => {
    const {rangeValue,onInputChange} = useChild();
  return (
    <>
    <div className="ages-filter-box">
        <p>Between the ages of:</p>
        <p>1-22</p>
        <input type="range" min={1} max={22} value={rangeValue} onChange={onInputChange}/>
    </div>
    </>
  )
}
