import UiButton from './UiButton';

export default {
    title: 'Ui-Kit/UiButton',
    component: UiButton
}

const props = {
    text: 'text', 
    disabled: true
}

const Template = (args) => <UiButton {...args} />

export const Light = Template.bind({});

Light.args = {
    ...props,
    theme: 'dark'
}

export const Dark = Template.bind({});

Dark.args = {
    ...props,
    theme: 'dark'
}

export const Disabled = Template.bind({});

Disabled.args = {
    ...props,
    disabled: true
}