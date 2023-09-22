import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import styled from "styled-components"
const SideBar=()=>{
    const[searchParams,setSearchParams]=useSearchParams();
    const initialGender=searchParams.getAll("gender")
    const initialColor=searchParams.getAll("color")
    const initialOrder=searchParams.get("order")
    const initialCategory=searchParams.getAll("category")
    const[gender,setGender]=useState(initialGender || [])
    const[color,setColor]=useState(initialColor || [])
    const[category,setCategory]=useState(initialCategory||[])
    const [order,setOrder]=useState(initialOrder || "")
    
    useEffect(()=>{
        const params={
            gender,
            color,
            category
        }
        order && (params.order=order)
        setSearchParams(params)
    },[gender,color,order,category])

    const handleGender=(e)=>{
        const {value}=e.target
        let newGender=[...gender]

        if(newGender.includes(value)){
            newGender=newGender.filter(el=>el!=value)
        }else{
            newGender.push(value)
        }
        setGender(newGender);
    }

    const handleCategory=(e)=>{
        const {value}=e.target
        let newCategory=[...category]

        if(newCategory.includes(value)){
            newCategory=newCategory.filter(el=>el!=value)
        }else{
            newCategory.push(value)
        }
        setCategory(newCategory);
    }

    const handleColor=(e)=>{
        const {value}=e.target
        let newColor=[...color]
        if(newColor.includes(value)){
            newColor=newColor.filter(el=>el!=value)
        }else{
            newColor.push(value)
        }
        setColor(newColor)
    }

    const handleSort=(e)=>{
        setOrder(e.target.value)
    }
    console.log(order)
    return(
        <DIV>
          <h3>Filter By Gender</h3>
          <div>
          <input type="checkbox" value={"male"} onChange={handleGender} checked={gender.includes("male")}/>
          <label>Men</label>
          </div>
          <div>
          <input type="checkbox" value={"female"} onChange={handleGender} checked={gender.includes("female")}/>
          <label>Women</label>
          </div>
          <div>
          <input type="checkbox" value={"kids"} onChange={handleGender} checked={gender.includes("kids")}/>
          <label>Kids</label>
          </div>
          <h3>Filter By Color</h3>
          <div>
          <input type="checkbox" value={"red"} onChange={handleColor} checked={color.includes("red")}/>
          <label>Red</label>
          </div>
          <div>
          <input type="checkbox" value={"black"} onChange={handleColor} checked={color.includes("black")}/>
          <label>Black</label>
          </div>
          <div>
          <input type="checkbox" value={"blue"} onChange={handleColor} checked={color.includes("blue")}/>
          <label>Blue</label>
          </div>
          <div>
          <input type="checkbox" value={"green"} onChange={handleColor} checked={color.includes("green")}/>
          <label>Green</label>
          </div>
          <div>
          <input type="checkbox" value={"white"} onChange={handleColor} checked={color.includes("white")}/>
          <label>White</label>
          </div>
          <div>
          <input type="checkbox" value={"pink"} onChange={handleColor} checked={color.includes("pink")}/>
          <label>Pink</label>
          </div>
          <div>
          <input type="checkbox" value={"yellow"} onChange={handleColor} checked={color.includes("yellow")}/>
          <label>Yellow</label>
          </div>
          <h3>Filter By Category</h3>
          <div>
          <input type="checkbox" value={"topwear"} onChange={handleCategory} checked={category.includes("topwear")}/>
          <label>Top wear</label>
          </div>
          <div>
          <input type="checkbox" value={"bottomwear"} onChange={handleCategory} checked={category.includes("bottomwear")}/>
          <label>Bottom Wear</label>
          </div>
          <div>
          <input type="checkbox" value={"saree"} onChange={handleCategory} checked={category.includes("saree")}/>
          <label>Saree</label>
          </div>
          <div>
          <input type="checkbox" value={"dress"} onChange={handleCategory} checked={category.includes("dress")}/>
          <label>Dress</label>
          </div>
          <div>
          <input type="checkbox" value={"footwear"} onChange={handleCategory} checked={category.includes("footwear")}/>
          <label>Foot Wear</label>
          </div>
          <h3>Sort By Price</h3>
          <div onChange={handleSort}>
            <input type="radio" name="order" value={"asc"} defaultChecked={order==="asc"}/>
            <label>Low to High</label>
            <br/>
            <input type="radio" name="order" value={"desc"} defaultChecked={order==="desc"}/>
            <label>High to Low</label>
          </div>
        </DIV>
    )
}
const DIV=styled.div`
padding: 0 20px;
border-right:100vh;
display: flex;
flex-direction: column;
align-items: start;
`
export default SideBar;