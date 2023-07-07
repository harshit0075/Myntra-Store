import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components'

export const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    let initialCategory = searchParams.getAll("category");
    let initialGender = searchParams.getAll("gender");
    let initialOrder=searchParams.get("order");
    const [category, setCategory] = useState(initialCategory || []);
    const [gender, setGender] = useState(initialGender || []);
    const [order, setOrder]=useState(initialOrder||"");

    useEffect(() => {
        let params = {
            gender,
            category,
        //    order,
        }
        order && (params.order=order);

        setSearchParams(params)
    }, [category, gender, order])

    // console.log(gender);
    const handleCategory = (e) => {
        const { value } = e.target;
        let newCategory = [...category];
        if (newCategory.includes(value)) {
            newCategory = newCategory.filter((e) => e !== value)
        } else {
            newCategory.push(value)
        }
        setCategory(newCategory);
    }

    const handleGender = (e) => {
        const { value } = e.target;
        let newGender = [...gender];
        if (newGender.includes(value)) {
            newGender = newGender.filter((e) => e !== value)
        } else {
            newGender.push(value)
        }
        setGender(newGender);
    }

    const handleOrder=(e)=>{
        const {value}=e.target;
        setOrder(value)
        // console.log(value);
    }
    return (
        <Div>
            <h3>Filter by category</h3>
            <div>
                <input type="checkbox" value={"top-wear"} onChange={handleCategory} checked={category.includes("top-wear")} />
                <label>Top Wear</label>
            </div>
            <div>
                <input type="checkbox" value={"bottom-wear"} onChange={handleCategory} checked={category.includes("bottom-wear")} />
                <label>Bottom Wear</label>
            </div>
            <div>
                <input type="checkbox" value={"foot-wear"} onChange={handleCategory} checked={category.includes("foot-wear")} />
                <label>Foot Wear</label>
            </div>
            <br />
            <h3>Filter By Gender</h3>
            <div>
                <input type="checkbox" value={"men"} onChange={handleGender} checked={gender.includes("men")} />
                <label>Men</label>
            </div>
            <div>
                <input type="checkbox" value={"women"} onChange={handleGender} checked={gender.includes("women")} />
                <label>Women</label>
            </div>
            <div>
                <input type="checkbox" value={"kids"} onChange={handleGender} checked={gender.includes("kids")} />
                <label>Kids</label>
            </div>
            <br/>
            <h3>Sort by Price</h3>
            <div onChange={handleOrder}>
            <div>
                <input type="radio" name='order' value={"asc"}defaultChecked={order==="asc"}/>
                <label>Ascending</label>
            </div>
            <div>
                <input type="radio" name='order' value={"desc"}defaultChecked={order==="desc"}/>
                <label>Descending</label>
            </div>
            </div>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding-left: 15px;
    border-right: 2px solid yellow;
    min-height: 80vh;
`