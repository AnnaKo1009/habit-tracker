import type { Meta, StoryObj } from "@storybook/react";
import { RegisterPageUI } from "./RegisterPage";

const meta: Meta<typeof RegisterPageUI> = {
  title: "Pages/RegisterPage",
  component: RegisterPageUI,
};

export default meta;
type Story = StoryObj<typeof RegisterPageUI>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log("Submit:", data),
  },
};