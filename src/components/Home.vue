<template>
    <div class="common-layout" style="font-family: Roboto,-apple-system,Helvetica Neue,Helvetica,Arial,sans-serif;">
        <el-affix id="top-bar">
            <el-row class="blur-background header-background" justify="end">
                <el-col :span="2" class="affix-header-logo-wrapper">
                    <div id="logo-img">
                        <img src="../assets/icons/PromptPerfect-light.svg" width="25" height="25"
                            style="vertical-align: middle;" />
                    </div>
                </el-col>
                <el-col :span="14">
                </el-col>

                <el-col :span="2" style="text-align: right;">
                    <div class="affix-header-login-wrapper">
                        <q-icon name="api" size="1.5rem" style="margin-right: 5px; vertical-align: middle;"></q-icon>
                        <span style="font-size: 14px; font-weight: 500">API</span>
                    </div>
                </el-col>

                <el-col :span="1" style="text-align: right;">
                    <q-tooltip>
                        Join on Discord Channel
                    </q-tooltip>
                    <q-icon name="fa-brands fa-discord" size="1.5rem"
                        style="vertical-align: middle; margin-right: 15px; margin-top: 10px;"></q-icon>
                </el-col>

                <el-col :span="1" style="text-align: right; border-right: 1px solid lightgrey; display: inline-block;">
                    <q-tooltip>
                        Switch between light, dark and auto mode
                    </q-tooltip>
                    <q-toggle toggle-indeterminate v-model="toggleState" unchecked-icon="brightness_high"
                        indeterminate-icon="brightness_medium" checked-icon="brightness_low" size="45px"
                        style="vertical-align: middle;" />
                </el-col>

                <el-col :span="2.5" style="text-align: right; border-left: 1px solid lightgrey">
                    <div class="affix-header-language-wrapper">
                        <!-- <el-icon :size="20" style="margin-right: 5px; vertical-align: middle;">
                            <Help />
                        </el-icon> -->
                        <q-icon name="language" size="1.5rem"
                            style="margin-right: 5px; vertical-align: middle;"></q-icon>
                        <el-dropdown style="margin-top: 4px; cursor: pointer;" @visible-change="languageDropdownChange">
                            <span class="el-dropdown-link" style="font-size: 14px; font-weight: 400">
                                ENGLISH
                                <el-icon class="el-icon--right" style="vertical-align: middle;" id="dropdown-arrow">
                                    <arrow-down />
                                </el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>Deutsch</el-dropdown-item>
                                    <el-dropdown-item>Action 2</el-dropdown-item>
                                    <el-dropdown-item>Action 3</el-dropdown-item>
                                    <el-dropdown-item>Action 4</el-dropdown-item>
                                    <el-dropdown-item>Action 5</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                </el-col>

                <el-col :span="1.5" style="text-align: right;">
                    <div class="affix-header-login-wrapper">
                        <q-icon name="login" size="1.5rem" style="margin-right: 5px; vertical-align: middle;"></q-icon>
                        <span style="font-size: 14px; font-weight: 500; color: #1D1D1D">LOG IN</span>
                    </div>
                </el-col>
            </el-row>
        </el-affix>
        <div style="padding-left: 5.5%; padding-right: 5.5%; padding-top: 4%;" class="title-page-wrapper">
            <div class="title-text-wrapper">
                <img src="../assets/icons/PromptPerfect-light.svg" height="60" width="60"
                    style="vertical-align: top;" />
                <span class="title-text">PromptPerfect</span>
            </div>
            <div class="introduction-text">The premier tool for prompt engineering</div>
            <div>
                <el-row>
                    <el-col :span="16">
                        <div class="scroller" data-speed="fast" data-animated="true" @mouseover="hoverScroller($event, 1)" @mouseleave="leaveScroller($event, 1)">
                            <div class="scroller__inner" id="scroller-1">
                                <q-card class="prompt-card" v-for="item in chat_items_1">
                                    <q-card-section>
                                        <el-row>
                                            <el-col :span="8" style="display: inline-block; text-align: center;">
                                                <img src="../assets/icons/chatgpt.svg" v-if="item.icon == 0" width="25"
                                                    style="margin-top: 35%;" />
                                                <img src="../assets/icons/claude.svg" v-if="item.icon == 1" width="25"
                                                    style="margin-top: 35%;" />
                                                <img src="../assets/icons/dalle.svg" v-if="item.icon == 2" width="25"
                                                    style="margin-top: 35%;" />
                                                <img src="../assets/icons/mj.webp" v-if="item.icon == 3" width="25"
                                                    style="margin-top: 35%;" />
                                                <img src="../assets/icons/sd.webp" v-if="item.icon == 4" width="25"
                                                    style="margin-top: 35%;" />
                                            </el-col>
                                            <el-col :span="2">
                                            </el-col>
                                            <el-col :span="14" style="text-overflow: ellipsis; 
                                                    max-width: 100%;
                                                    overflow: hidden">
                                                <div style="color: #000000B3; font-size: 12px;">Original Prompt</div>
                                                <div
                                                    style="font-size: 14px; line-height: 1.2rem !important;
                                                    display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;">
                                                    {{ item.original_prompt }}</div>
                                            </el-col>
                                        </el-row>
                                    </q-card-section>

                                    <q-separator />

                                    <q-card-actions
                                        style="background-image: linear-gradient(45deg, rgb(3, 218, 198) 25%,#f2d7ee); padding: 10%">
                                        <div style="color: #000000B3; font-size: 12px;">Optimized Prompt</div>
                                        <div style="font-size: 14px; line-height: 1.2rem !important;
                                            display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; text-overflow: ellipsis; 
                                                    max-width: 100%;
                                                    overflow: hidden">
                                            {{ item.optimized_prompt }}</div>
                                    </q-card-actions>
                                </q-card>
                            </div>
                        </div>

                        <div class="scroller" data-speed="fast" data-direction="right" data-animated="true" @mouseover="hoverScroller($event, 2)" @mouseleave="leaveScroller($event, 2)">
                            <div class="scroller__inner" id="scroller-2">
                                <q-card class="prompt-card" v-for="item in chat_items_1">
                                    <q-card-section>
                                        <el-row>
                                            <el-col :span="8" style="display: inline-block; text-align: center;">
                                                <img src="../assets/icons/chatgpt.svg" v-if="item.icon == 0" width="25"
                                                    style="margin-top: 35%;" />
                                                <img src="../assets/icons/claude.svg" v-if="item.icon == 1" width="25"
                                                    style="margin-top: 35%;" />
                                                <img src="../assets/icons/dalle.svg" v-if="item.icon == 2" width="25"
                                                    style="margin-top: 35%;" />
                                                <img src="../assets/icons/mj.webp" v-if="item.icon == 3" width="25"
                                                    style="margin-top: 35%;" />
                                                <img src="../assets/icons/sd.webp" v-if="item.icon == 4" width="25"
                                                    style="margin-top: 35%;" />
                                            </el-col>
                                            <el-col :span="2">
                                            </el-col>
                                            <el-col :span="14" style="text-overflow: ellipsis; 
                                                    max-width: 100%;
                                                    overflow: hidden">
                                                <div style="color: #000000B3; font-size: 12px;">Original Prompt</div>
                                                <div
                                                    style="font-size: 14px; line-height: 1.2rem !important;
                                                    display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;">
                                                    {{ item.original_prompt }}</div>
                                            </el-col>
                                        </el-row>
                                    </q-card-section>

                                    <q-separator />

                                    <q-card-actions
                                        style="background-image: linear-gradient(45deg, rgb(3, 218, 198) 25%,#f2d7ee); padding: 10%">
                                        <div style="color: #000000B3; font-size: 12px;">Optimized Prompt</div>
                                        <div style="font-size: 14px; line-height: 1.2rem !important;
                                            display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; text-overflow: ellipsis; 
                                                    max-width: 100%;
                                                    overflow: hidden">
                                            {{ item.optimized_prompt }}</div>
                                    </q-card-actions>
                                </q-card>
                            </div>
                        </div>

                        <div class="lunch-date-text">Since its first launch on Feb. 28, 2023,</div>
                        <div class="text-h6" style="margin-top: 2%">PromptPerfect has helped 324,098 happy users generate 2,866,974 prompts!</div>
                    
                        <el-row style="margin-top: 3%;">
                            <el-col :span="2">
                            </el-col>

                            <el-col :span="4">
                                <img src="../assets/icons/logo-Farfetch.70708022.svg" width="120" style="" />
                            </el-col>
                            <el-col :span="4">
                                <img src="../assets/icons/logo-LOreal.deb4c1dd.svg" width="120" style="" />
                            </el-col>
                            <el-col :span="4">
                                <img src="../assets/icons/logo-Pitch.16cde9d0.svg" width="120" style="" />
                            </el-col>
                            <el-col :span="4">
                                <img src="../assets/icons/logo-spendesk.38fed4e5.svg" width="120" style="" />
                            </el-col>
                            <el-col :span="4">
                                <img src="../assets/icons/logo-wordlift.ece290b0.svg" width="120" style="" />
                            </el-col>
                        </el-row>

                        <el-row style="margin-top: 3%; margin-bottom: 5%;">
                            <el-col :span="2">
                            </el-col>

                            <el-col :span="4">
                                <img src="../assets/icons/logo-zoho.659b23a3.svg" width="120" style="" />
                            </el-col>
                            <el-col :span="4">
                                <img src="../assets/icons/logo-Amazon.13969d46.svg" width="120" style="" />
                            </el-col>
                            <el-col :span="4">
                                <img src="../assets/icons/logo-DW.bb3924a5.svg" width="120" style="" />
                            </el-col>
                            <el-col :span="4">
                                <img src="../assets/icons/logo-mm1.bdd4d1c5.svg" width="120" style="" />
                            </el-col>
                            <el-col :span="4">
                                <img src="../assets/icons/logo-datayes.webp" width="120" style="" />
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="8" style="padding-left: 2%;">
                        <q-card class="login-card" style="background: rgba(0, 0, 0, 0);" :flat="true" :bordered="true">
                            <q-card-section>
                                <div class="login-card-title-wrapper">
                                    <q-icon name="login" size="1.3rem"
                                        style="margin-right: 10px; vertical-align: -4px;"></q-icon>
                                    <span style="font-size: 20px; font-weight: 500">Log in or sign up in seconds</span>
                                </div>

                                <div style="text-align: center;">
                                    <div class="login-card-content-wrapper">
                                        <img src="../assets/icons/google.85feab21.svg" height="24" width="24"
                                            style="margin-right: 10px; vertical-align: middle;" />
                                        <span style="font-size: 14px; font-weight: 500">Continue with Google</span>
                                    </div>
                                </div>

                                <div style="text-align: center;">
                                    <div class="login-card-content-wrapper">
                                        <q-icon name="fa-brands fa-github" size="1.5rem"
                                            style="vertical-align: middle; margin-right: 10px;"></q-icon>
                                        <span style="font-size: 14px; font-weight: 500">Continue with GitHub</span>
                                    </div>
                                </div>

                                <div style="text-align: center;">
                                    <div class="login-card-content-wrapper">
                                        <img src="../assets/icons/wechat.d7a9cfed.svg" height="24" width="24"
                                            style="margin-right: 10px; vertical-align: middle;" />
                                        <span style="font-size: 14px; font-weight: 500">Continue with Wechat</span>
                                    </div>
                                </div>

                                <el-row style="text-align: center;">
                                    <el-col :span="8" class="login-card-icon-wrapper">
                                        <q-tooltip>
                                            Continue with Apple
                                        </q-tooltip>
                                        <q-icon name="fa-brands fa-apple" size="1.5rem"
                                            style="vertical-align: middle;"></q-icon>
                                    </el-col>

                                    <el-col :span="8" class="login-card-icon-wrapper">
                                        <q-tooltip>
                                            Continue with Microsoft
                                        </q-tooltip>
                                        <img src="../assets/icons/microsoft.236af7a9.svg" height="24" width="24"
                                            style="vertical-align: middle;" />
                                    </el-col>

                                    <el-col :span="8" class="login-card-icon-wrapper">
                                        <q-tooltip>
                                            Continue with Microsoft
                                        </q-tooltip>
                                        <img src="../assets/icons/facebook.514b2a40.svg" height="24" width="24"
                                            style="vertical-align: middle;" />
                                    </el-col>
                                </el-row>

                                <el-row style="text-align: center;">
                                    <el-col :span="8" class="login-card-icon-wrapper">
                                        <q-tooltip>
                                            Continue with X/Twitter
                                        </q-tooltip>
                                        <q-icon name="fa-brands fa-x-twitter" size="1.5rem"
                                            style="vertical-align: middle;"></q-icon>
                                    </el-col>

                                    <el-col :span="8" class="login-card-icon-wrapper">
                                        <q-tooltip>
                                            Continue with Yahoo
                                        </q-tooltip>
                                        <q-icon name="fa-brands fa-yahoo" size="1.5rem"
                                            style="vertical-align: middle; color: #B197FC;"></q-icon>
                                    </el-col>

                                    <el-col :span="8" class="login-card-icon-wrapper">
                                        <q-tooltip>
                                            Continue with Email
                                        </q-tooltip>
                                        <q-icon name="fa-solid fa-envelope" size="1.5rem"
                                            style="vertical-align: middle;"></q-icon>
                                    </el-col>
                                </el-row>

                                <div style="text-align: left; padding-left: 5%" class="login-card-icon-wrapper">
                                    <q-checkbox v-model="checked">
                                        <slot name="description">
                                            <span style="font-size: 12px; color: #757575;">
                                                By continuing, you agree to the <span
                                                    style="text-decoration: underline;">Terms
                                                    and Conditions</span>
                                                and <span style="text-decoration: underline;">Privacy Policy</span> from
                                                Jina
                                                AI.
                                            </span>
                                        </slot>
                                    </q-checkbox>
                                </div>

                                <div style="text-align: left; padding-left: 5%" class="login-card-icon-wrapper">
                                    <q-checkbox v-model="checked2">
                                        <slot name="description">
                                            <span style="font-size: 12px; color: #757575;">
                                                Click to subscribe to our newsletter
                                            </span>
                                        </slot>
                                    </q-checkbox>
                                </div>
                            </q-card-section>
                        </q-card>
                    </el-col>
                </el-row>
            </div>
        </div>

        <service style="margin-bottom: 10%;"></service>

        <el-affix position="bottom" :offset="0">
            <el-row class="row-sm affix-footer-row blur-background" justify="end">
                <el-col :span="14" class="affix-footer-img-wrapper">
                    <img src="../assets/icons/jina-ai-color.svg" class="affix-footer-img" />
                </el-col>
                <el-col :span="5" class="affix-footer-text-wrapper">
                    <span class="text-caption">Copyright © 2020-2024 Jina AI GmbH</span>
                </el-col>
            </el-row>
        </el-affix>
    </div>
</template>

<script>
import { ref } from 'vue'
import Service from './Service.vue'
export default {
    components: {
        Service,
    },
    setup() {
        let toggleState = ref(null);
        let checked = ref(false);
        let checked2 = ref(false);

        let chats1 = [];
        let chats2 = [];
        for (let i = 0; i < 10; i++) {
            var random = Math.floor(Math.random() * 5)
            chats1.push({
                "icon": random,
                "original_prompt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at.",
                "optimized_prompt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet porta diam. Quisque dui.",
            })

            random = Math.floor(Math.random() * 5)
            chats2.push({
                "icon": random,
                "original_prompt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at.",
                "optimized_prompt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet porta diam. Quisque dui.",
            })
        }
        const chat_items_1 = ref(chats1)
        const chat_items_2 = ref(chats2)

        function languageDropdownChange(status) {
            if (status) {
                document.getElementById('dropdown-arrow').style.animation = "spin1 0.3s linear 1 normal forwards";
            } else {
                document.getElementById('dropdown-arrow').style.animation = "spin2 0.3s linear 1 normal forwards";
            }
        }

        function hoverScroller(event, number) {
            document.getElementById("scroller-" + String(number)).style.animationPlayState = 'paused';
        }
        function leaveScroller(event, number) {
            document.getElementById("scroller-" + String(number)).style.animationPlayState = 'running';
        }
        return { languageDropdownChange, toggleState, checked, checked2, chat_items_1, chat_items_2, hoverScroller, leaveScroller }
    }
}
</script>

<style>
#logo-img {
    border-radius: 50%;
    transition: 0.3s;
    cursor: pointer;
    height: 30px;
    width: 30px;
    text-align: center;
    padding-top: 5px;
    margin-left: -20px;
}

#logo-img:hover {
    background-color: lightgrey;
}

.blur-background {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    -moz-backdrop-filter: blur(10px);
    -o-backdrop-filter: blue(10px);
}

.header-background {
    height: 50px;
    border-bottom: 1px solid lightgrey;
}

.affix-header-language-wrapper {
    text-align: right;
    padding: 10px;
    display: inline-block;
}

.affix-header-logo-wrapper {
    text-align: left;
    display: inline-block;
    padding: 10px;
}

.affix-header-login-wrapper {
    text-align: right;
    padding: 10px;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s;
}

.affix-header-login-wrapper:hover {
    background-color: lightgrey;
}

.affix-footer-row {
    border-top: 1px solid lightgrey;
}

.affix-footer-img {
    height: 24px;
    margin-bottom: 3px;
}

.affix-footer-img-wrapper {
    text-align: center;
    padding-top: 10px;
    width: 100%;
}

.affix-footer-text-wrapper {
    text-align: right;
    margin-top: 10px;
}

.text-caption {
    font-size: .75rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: .03333em;
}

.title-page-wrapper {
    background-image: url(../assets/icons/login-background.svg);
    background-repeat: no-repeat;
    background-position-x: 400px;
    background-position-y: 20px;
    background-size: 93% 93%;
    border-bottom: solid 1px lightgrey;
}

.title-text {
    font-family: IconFont;
    font-size: 3.75rem;
    font-weight: 300;
    line-height: 3.75rem;
    letter-spacing: -.00833em;
}

.title-text-wrapper {
    display: inline-block;
    margin-bottom: 0.3%;
}

.introduction-text {
    margin-left: 3%;
}

.login-card {
    width: 100%;
    max-width: 560px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    -moz-backdrop-filter: blur(10px);
    -o-backdrop-filter: blue(10px);
}

.login-card-title-wrapper {
    text-align: right;
    padding: 10px;
    display: inline-block;
    transition: 0.3s;
    margin-top: 6%;
    margin-left: 3%;
    color: black;
}

.login-card-content-wrapper {
    text-align: right;
    padding: 10px;
    display: inline-block;
    transition: 0.3s;
    margin-top: 6%;
    margin-left: 3%;
    color: #616161;
    cursor: pointer;
}

.login-card-content-wrapper:hover {
    background-color: lightgrey;
}

.login-card-icon-wrapper {
    transition: 0.3s;
    padding-top: 5%;
    padding-bottom: 5%;
}

.login-card-icon-wrapper:hover {
    background-color: lightgrey;
}

.prompt-card {
    width: 280px;
}

@keyframes spin1 {
    100% {
        transform: rotate(180deg);
    }
}

@keyframes spin2 {
    100% {
        transform: rotate(0deg);
    }
}

.text-h6 {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: .0125em;
    text-align: center;
}

.lunch-date-text {
    margin-top: 5%;
    font-size: .75rem;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: .16667em;
    text-align: center;
}

.scroller {
    max-width: 100%;
}

.scroller__inner {
    padding-block: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.scroller[data-animated="true"] {
    overflow: hidden;
    -webkit-mask: linear-gradient(90deg,
            transparent,
            white 20%,
            white 80%,
            transparent);
    mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
}

.scroller[data-animated="true"] .scroller__inner {
    width: max-content;
    flex-wrap: nowrap;
    animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear infinite;
}

.scroller[data-direction="left"] {
    --_animation-direction: forwards;
}

.scroller[data-direction="right"] {
    --_animation-direction: reverse;
}

.scroller[data-speed="fast"] {
    --_animation-duration: 20s;
}

@keyframes scroll {
    to {
        transform: translate(calc(-50% - 0.5rem));
    }
}
</style>