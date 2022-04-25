<template>
    <footer class="footer">
        <div class="footer_container">
            <h4 class="footer_title">
                Lorem ipsum
            </h4>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss">
@use '@/styles/utils/layout.scss' as *;
@use '@/styles/utils/fonts.scss' as *;
@use '@/styles/tokens/colors.scss' as *;
@use '@/styles/tokens/spacing.scss' as *;

.footer {
	display: flex;
	justify-content: center;

	width: 100%;
	padding: $spacing-vh-md;
	
	background-color: $color-neutral-low-medium;	
}

.footer_container {
	@extend %container;

	justify-content: center;
}

.footer_title {
	@extend %font_md_bold;

	color: $color-neutral-high-pure;

	text-transform: uppercase;
}
</style>