package utils;

public class Ticket {

    private String Title;
    private String RequestType;
    private String Priority;
    private String Location;
    private String Description;

    public Ticket(String title, String requestType, String priority, String location, String description)
    {
        this.Title = title;
        this.RequestType = requestType;
        this.Priority = priority;
        this.Location = location;
        this.Description = description;
    }

    public boolean isEqual(Ticket ticket)
    {
        if (this.Title.equals(ticket.Title) && this.RequestType.equals(ticket.RequestType) &&
                this.Priority.equals(ticket.Priority) && this.Location.equals(ticket.Location) &&
                this.Description.equals(ticket.Description))
            return true;
        return  false;
    }
}
