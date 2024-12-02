<template>
    <div>
        <form @submit.prevent="subscribe">
            <input type="email" v-model="email" placeholder="Email" required />
            <button type="submit">Subscribe</button>
        </form>
        <p v-if="successMessage">{{ successMessage }}</p>
        <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    </div>
</template>

<script lang="ts" setup>
const successMessage = ref('')
const errorMessage = ref('')
const email = ref('')

const subscribe = async () => {
    try {
        // Exemple d'appel à une API (remplacez avec votre API réelle)
        const response = await fetch("https://example.com/api/newsletter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email.value })
        });

        if (!response.ok) {
            throw new Error("An error occurred during registration.");
        }

        const data = await response.json();
        successMessage.value = "Merci de vous être abonné(e) à notre newsletter !";
        errorMessage.value = "";
        email.value = ""; // Réinitialise le champ email
    } catch (err) {
        successMessage.value = "";
        errorMessage.value = "An error occurred during registration."
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
}

input {
    padding: 8px;
    border: 1px solid;
    border-color: var(--background-color-3);
    border-radius: 4px;
}

button {
    padding: 10px;
    background-color: var(--link-color-1);
    color: var(--background-color-1);
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    filter:brightness(1.1)
}
</style>