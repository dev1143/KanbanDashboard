import React, { useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "@emotion/styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeCardValue, openCard, storeColumnId, storeButtonName } from "../slice/cardTaskReducerSlice";
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';

const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px;
  min-height: 106px;
  border-radius: 5px;
  max-width: 311px;
  /* background: ${({ isDragging }) =>
        isDragging ? "rgba(255, 59, 59, 0.15)" : "white"}; */
  background: white;
  margin-top: 15px;

  .secondary-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400px;
    color: #7d7d7d;
  }
`;

const CustomButtons = styled.div`
display:flex;
justify-content:flex-end;
gap:2px;
`

const TaskCard = ({ columnId, cardData, item, index }) => {
    const ViewMode = useSelector((state) => state.card.viewMode)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [uniqueCardVal, setUniqueCardVal] = useState({})
    const [cardValue, setcardValue] = useState([])
    useEffect(() => {
        if (Array.isArray(cardData) && cardData.length > 0) {
            setcardValue(cardData)
        }
        if (item && item instanceof Object) {
            setUniqueCardVal(item)
        }
    }, [cardData])

    return (
        <Draggable key={uniqueCardVal.id} draggableId={uniqueCardVal.id} index={index}>

            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <TaskInformation>
                        <p>{uniqueCardVal.Description}</p>
                        <div className="secondary-details">
                            <span>
                                {new Date(uniqueCardVal.Due_Date).toLocaleDateString("en-us", {
                                    month: "short",
                                    day: "2-digit",
                                })}
                            </span>
                            <CustomButtons>
                                {ViewMode && ViewMode == "admin" &&
                                    <IconButton
                                        onClick={() => {
                                            dispatch(openCard(true))
                                            let idFinderObj = cardData.find((y) => y.id == uniqueCardVal.id);
                                            dispatch(storeCardValue(idFinderObj))
                                            dispatch(storeColumnId(columnId))
                                            dispatch(storeButtonName("Edit"))
                                            console.log('id Catcher___', cardValue, idFinderObj)
                                        }}
                                        style={{ display: "flex", justifyContent: "flex-end" }}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                }
                                <IconButton
                                    onClick={() => {
                                        dispatch(openCard(true))
                                        let idFinderObj = cardData.find((y) => y.id == uniqueCardVal.id);
                                        dispatch(storeCardValue(idFinderObj))
                                        dispatch(storeColumnId(columnId))
                                        dispatch(storeButtonName("View"))
                                        console.log('id Catcher___', cardValue, idFinderObj)
                                    }}
                                    style={{ display: "flex", justifyContent: "flex-end" }}
                                >
                                    <VisibilityIcon />
                                </IconButton>
                            </CustomButtons>
                        </div>
                    </TaskInformation>
                </div>
            )}

        </Draggable>
    );
};

export default TaskCard;


