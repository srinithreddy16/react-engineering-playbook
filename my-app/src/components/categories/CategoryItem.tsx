import './categoryItem.css';

export default function CategoryItem({ categoryObj }: any) {  //props destructuring
  return <>
    <img src={categoryObj.img_url} alt="" />
    <div>{categoryObj.label}</div>
  </>
}
