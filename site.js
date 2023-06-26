var accordionSection = $('.acc-section')

function ToggleAccordion(current)
{
    accordionSection.removeClass('active');
    $(this).addClass('active');
}

accordionSection.on('click', ToggleAccordion);