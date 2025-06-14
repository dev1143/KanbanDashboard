import React from "react";
import styled from "@emotion/styled";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import OpenModal from "./OpenModal";
import { useSelector, useDispatch } from "react-redux";
import { updateCardItemsObj } from "../slice/cardTaskReducerSlice";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ToastContainer } from "react-toastify";
// Renamed for clarity

const Container = styled.div`
  display: flex;
  justify-content:center;
`;

const TaskList = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  min-width: 341px;
  border-radius: 5px;
  padding: 15px;
  margin-right: 45px;
`;

const TaskColumnStyles = styled.div`
  margin: 8px;
  display: flex;
  justify-content:center;
  width: 100%;
  min-height: 80vh;
`;

const Title = styled.span`
  color: #10957d;
  background: rgba(16, 149, 125, 0.15);
  padding: 2px 10px;
  border-radius: 5px;
  align-self: flex-start;
`;

const Kanban = () => {
    const dispatch = useDispatch();
    const columns = useSelector((state) => state.card.cardItemsObj || {});

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;

        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];

        if (source.droppableId !== destination.droppableId) {
            const sourceItems = [...(sourceColumn.items || [])];
            const destItems = [...(destColumn.items || [])];
            const [movedItem] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, movedItem);

            const updatedColumns = {
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems,
                },
            };

            dispatch(updateCardItemsObj(updatedColumns));
        } else {
            const column = columns[source.droppableId];
            const reorderedItems = [...(column.items || [])];
            const [movedItem] = reorderedItems.splice(source.index, 1);
            reorderedItems.splice(destination.index, 0, movedItem);

            const updatedColumns = {
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: reorderedItems,
                },
            };

            dispatch(updateCardItemsObj(updatedColumns));
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>

            <Container>
                <TaskColumnStyles>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            {Object.entries(columns).map(([columnId, column]) => (
                                <Droppable key={columnId} droppableId={columnId}>
                                    {(provided) => (
                                        <Grid size={{ xs: 12, md: 4, sm: 6 }}>
                                            <TaskList
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                            >
                                                <Title>{column.title}</Title>

                                                {(column.items || []).map((item, index) => (

                                                    <TaskCard
                                                        key={item.id}
                                                        item={item}
                                                        index={index}
                                                        columnId={columnId}
                                                        cardData={column.items}
                                                    />

                                                ))}

                                                {provided.placeholder}
                                            </TaskList>
                                        </Grid>

                                    )}
                                </Droppable>
                            ))}
                            <ToastContainer />

                            <OpenModal />
                        </Grid>
                    </Box>
                </TaskColumnStyles>
            </Container >

        </DragDropContext >
    );
};

export default Kanban;
