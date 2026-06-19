<script>
    import { page } from "$app/state";
</script>
<style>
    #thing{
        font-size: 200px;
        position: absolute;
        top: 50%;
        left: 50%;
        font-weight: bolder;
        transform: translateX(-50%) translateY(-50%);
        color: white;
        mix-blend-mode: difference;
    }
</style>
<div id="enable_background_2"></div>
<div id="thing">
  {page.status}
</div>