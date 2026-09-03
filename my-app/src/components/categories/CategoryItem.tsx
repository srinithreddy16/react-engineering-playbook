import './categoryItem.css';

export default function CategoryItem({ categoryObj }: any) {  //props destructuring
  return <>
    <img src={categoryObj.img_url} alt="" />
    <div>{categoryObj.label}</div>
  </>
}

/*
another way of props destructuring
type CategoryProps {
    categoryObj : {
        img_url:string,
        label:string
    }
}

export default function CategoryItem({ categoryObj:{img_url, label}} : CategoryProps) {
    return <>
        <img src={img_url} alt="" />
        <div>{label}</div>
    </>
}

*/
