import { reactive } from "vue"
export const store = reactive({

    contacts: [
        {
            icon: "fa-solid fa-phone",
            text: "+1 (305) 1234-5678",
            href: "#"

        },
        {
            icon: "fa-solid fa-envelope",
            text: "hello@example.com",
            href: "#"

        },
        {
            icon: "fa-solid fa-location-dot",
            text: "Main Avenue, 987",
            href: "#"

        },
    ]
})