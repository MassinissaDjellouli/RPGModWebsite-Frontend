export interface IUserStats {
    id: string | undefined;
    uploadTime: string;
    username: string;
    worldId: string;
    blocksMined: number;
    mobsKilled: number;
    blocksForaged: number;
    currentClass: string;
    miningLevel: number;
    miningXp: number;
    totalMiningXp: number;
    foragingLevel: number;
    foragingXp: number;
    totalForagingXp: number;
    combatLevel: number;
    combatXp: number;
    totalCombatXp: number;
    bestClass: string;
    highestLevel: number;
    totalXp: number;
}