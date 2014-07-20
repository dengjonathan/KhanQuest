var CombatConstants = {
    START_COMBAT: "START_COMBAT",
    END_COMBAT: "END_COMBAT",
    USE_ABILITY: "USE_ABILITY",
    PLAYER_CAST_SPELL: "PLAYER_CAST_SPELL",
    PLAYER_CHOOSE_TARGET: "PLAYER_CHOOSE_TARGET",

    CombatEngineStates: {
        AWAITING_PLAYER_TURN: "AWAITING_PLAYER",
        PLAYER_SELECTING_TARGET: "SELECTING_TARGET",
        RUNNING: "RUNNING_TURN"
    }
};

module.exports = CombatConstants;
