import {
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder
} from 'discord.js';

export async function handleVerificationButton(interaction) {

    const modal = new ModalBuilder()
        .setCustomId(`verify_modal_${interaction.user.id}`)
        .setTitle('Server Verification');

    const gamertagInput = new TextInputBuilder()
        .setCustomId('gamertag')
        .setLabel('Enter your in-game gamertag')
        .setStyle(TextInputStyle.Short)
        .setRequired(true);

    modal.addComponents(
        new ActionRowBuilder().addComponents(gamertagInput)
    );

    await interaction.showModal(modal);
}

export default {
    customId: "verify_user",
    execute: handleVerificationButton
};
