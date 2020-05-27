<script type="application/javascript">
  let tabsButtons = document.getElementsByClassName('tabs-button');
for (let i = 0; i < tabsButtons.length; i++) {
  tabsButtons[i].addEventListener('click', () => {
    let activeTabsButtons = document.getElementsByClassName('tabs-button-active');
    for (let j = 0; j < activeTabsButtons.length; j++) {
      activeTabsButtons[j].classList.remove('tabs-button-active');
    }
    tabsButtons[i].classList.add('tabs-button-active');
    let id = tabsButtons[i].dataset.id;

    let activeContent = document.getElementsByClassName('content-active');
    for (let j = 0; j < activeContent.length; j++) {
      activeContent[j].classList.remove('content-active');
    }
    document.getElementById(id).classList.add('content-active');
  }, false);
}
</script>
