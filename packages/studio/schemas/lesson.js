export default {
    name: "class",
    type: "document",
    initialValue: {
        lockdown: true,
        where: "online",
        active: false
    },
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "description",
            title: "Class description",
            type: "text",
            validation: Rule => Rule.required()
        },
        {
            name: "price",
            title: "Price",
            type: "reference",
            to: [{
                type: "price",
            }],
            validation: Rule => Rule.required()
        },
        {
            name: 'when',
            title: 'When',
            type: 'date'
        },
        {
            name: 'where',
            title: 'Where',
            type: 'string'
        },
        {
            name: 'lockdown',
            title: 'Lockdown',
            type: "boolean"
        }, {
            name: 'availability',
            title: 'Available places',
            type: 'number'
        },
        {
            name: 'weekly',
            title: "Weekly",
            type: "boolean"
        },
        {
            name: 'active',
            title: 'Active',
            description: 'Set wether the class is active or not. This will be reflected on the website with a "Coming Soon" badge.',
            type: 'boolean'
        }

    ]

}