<template>
    <main>
        <div class="container-md my-5">
            <h3 class="text-center">Silakan Login</h3>
            <div class="mt-2 product__list-product row d-flex flex-wrap g-3 justify-content-center">
                <div class="col-12 col-lg-6 col-sm-12">
                    <div class="container card p-3">
                        <h3>Login</h3>
                        <p>Enter your details below</p>
                        <form action="">
                            <base-input type="email" identity="email" placeholder="Your email" label="Email"> </base-input> <br />
                            <base-input type="password" identity="password" placeholder="Your Password" label="Password"> </base-input>
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
