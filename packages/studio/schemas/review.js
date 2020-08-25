export default {
    name: "review",
    type: "document",
    title: "Review",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "review",
            title: "Review",
            type: "text"
        },
        {
            name: "reviewer",
            title: "Reviewer",
            type: "string"
        }
    ]
}