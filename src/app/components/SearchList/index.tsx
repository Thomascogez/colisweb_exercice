import React, { useContext } from 'react';
import { ListGroup, ListGroupItem } from 'shards-react';
import { AppContext } from '../../context/AppContext';
import style from './SearchList.module.css';
const SearchList = () => {
    const appContext = useContext(AppContext);

    const onClick = (lat, lng) => {
        // focus on clicked map point and zoom
        appContext.setCoordinate({ lat, lng })
        appContext.setZoom(15)
    }

    return (
        <ListGroup className={style.SearchList}>
            {appContext.searchResult.map((res) => (
                <ListGroupItem
                    onClick={() => onClick(res.geometry.coordinates[1], res.geometry.coordinates[0])}
                    className={style.SearchListItem} >{res.properties.label}
                </ListGroupItem>)
            )}
        </ListGroup>
    )
}


export default SearchList