<script setup lang="ts"></script>

<template>
    <section flex items-center m-a>
        <div>Lyx</div>
        <el-button text @click="toggleDark()">
            <button class="i-carbon-sun dark:i-carbon-moon" />
        </el-button>
    </section>
</template>
