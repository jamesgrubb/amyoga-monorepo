export default {
    name: 'siteSettings',
    title: 'Site settings',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'portrait',
            title: 'Portrait',
            type: 'image',
            fields: [
                {
                    name: "caption",
                    title: "Caption",
                    type: "string",
                    options: {
                        isHighlighted: true // <-- make this field easily accessible
                    }
                }
            ]
        },
        {
            name: 'intro',
            title: 'Introduction',
            type: 'array',
            of: [
                {
                    type: 'block',
                    // Only allow these block styles
                    styles: [
                        { title: 'Normal', value: 'normal' },
                    ],
                    // Only allow numbered lists
                    lists: [],
                    marks: {
                        // Only allow these decorators
                        decorators: [
                            { title: 'Strong', value: 'strong' }
                        ]
                        // Support annotating text with a reference to an author

                    }
                }
            ]
        }
    ]
}