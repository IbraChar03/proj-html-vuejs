import { reactive } from "vue"
export const store = reactive({
    phoneNumber: " +1 (305) 1234-5678",
    email: "hello@example.com",
    placePosition: "Main Avenue,987",
    contacts: [
        {
            icon: "fa-solid fa-phone",
            text: "+1 (305) 1234-5678"

        },
        {
            icon: "fa-solid fa-envelope",
            text: "hello@example.com"

        },
        {
            icon: "fa-solid fa-location-dot",
            text: "Main Avenue, 987"

        },
    ]
})