<template>
    <main>
        <div class="container-md my-5">
            <div class="product__list-product row d-flex flex-wrap g-3 justify-content-center">
                <div class="col-12 col-lg-6 col-sm-12">
                    <div class="container card p-3">
                        <h3>Sign Up</h3>
                        <p>Enter your details below</p>
                        <form action="">
                            <base-input type="text" identity="fullname" placeholder="Enter your fullname" label="Fullname"> </base-input><br />

                            <base-input type="text" identity="username" placeholder="Enter your username" label="Username"> </base-input><br />

                            <base-input type="email" identity="email" placeholder="Your email address" label="Email"> </base-input><br />

                            <base-input type="password" identity="password" placeholder="Your Password" label="Password"> </base-input>
                            <p class="text-danger mt-1 fw-medium" style="font-size: 11px" :style="{ display: passwordStatusDisplay }">The password field must be at least 8 characters</p>
                            <br />

                            <base-input type="password" identity="confirmationPassword" placeholder="Same with password" label="Confirmation Password"> </base-input>
                            <p class="text-danger mt-1 fw-medium" style="font-size: 11px" :style="{ display: confirmPasswordDoesNotMatch }">The password confirmation doesn't match</p>
                            <p class="text-success mt-1 fw-medium" style="font-size: 11px" :style="{ display: confirmPasswordDoesMatch }">The password confirmation does match</p>

                            <div class="d-flex mt-2">
                                <input type="checkbox" class="me-2" />
                                <label for="" style="text-align: justify"
                                    >By clicking sign up, I hereby agree and consent to <a href="" class="text-link">Term and Condition</a>; I confirm that I have read
                                    <a href="" class="text-link">Privacy policy</a>.</label
                                >
                            </div>
                        </form>
                        <br />
                        <a href="user.html" class="btn w-100 text-white mb-2" style="background-color: #008181">Continue</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import BaseInput from "../ui/BaseInput.vue";
</script>
