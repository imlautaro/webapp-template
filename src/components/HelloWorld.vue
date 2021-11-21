<template>
	<h1>Hello world from {{ from }}!</h1>
</template>

<script setup lang="ts">
interface Props {
	from?: string
}
withDefaults(defineProps<Props>(), {
	from: 'Vite',
})
</script>
