import './categoryItem.css';

export default function CategoryItem(props: any) {
  return <>
    <img src={props.categoryObj.img_url} alt="" />
    <div>{props.categoryObj.label}</div>
  </>
}
