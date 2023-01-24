import { useState } from "react";
import { DateSelectArg, EventClickArg, formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import Header from "@/components/common/header";
import { colorTokens } from "@/styles/theme";

interface Event {
    id: string;
    title: string;
    start: Date | string | null;
    end: Date | string | null;
    allDay: boolean;
}

export default function Calendar() {
    const [currentEvents, setCurrentEvents] = useState<Event[]>([]);
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    const handleDateClick = (selected: DateSelectArg) => {
        const title = prompt("Please enter a new Title for your event");
        const calendarAPI = selected.view.calendar;
        calendarAPI.unselect();

        if (title) {
            calendarAPI.addEvent({
                id: `${selected.startStr}-${selected.endStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected: EventClickArg) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event ${selected.event.title}`
            )
        )
            selected.event.remove();
    };

    return (
        <Box sx={{ padding: "0 16px" }}>
            <Header title="Calendar" subtitle="Calendar Interactive Page" />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box
                    sx={{
                        flex: "1 1 20%",
                        backgroundColor: colors.primary[400],
                        p: "15px",
                        borderRadius: "4px",
                    }}
                >
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    m: "10px 0",
                                    borderRadius: "2px",
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start!, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                                hour: event.allDay
                                                    ? undefined
                                                    : "numeric",
                                                minute: event.allDay
                                                    ? undefined
                                                    : "numeric",
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box sx={{ flex: "1 1 100%", ml: "15px" }}>
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            interactionPlugin,
                            listPlugin,
                            timeGridPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next,today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        dayMaxEvents={true}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                    />
                </Box>
            </Box>
        </Box>
    );
}
