export { c as animations, b as borderRadius, d as brandColors, f as fontFamilies, e as fontSizes, g as glassEffect, a as shadows, s as spacingConstants, t as transitionStyles } from './colors-DXdqRGQu.mjs';
import '@mui/material/styles';

interface SemanticRole {
    light: string;
    dark?: string;
    comment?: string;
}
interface SemanticGroup {
    title: string;
    roles: Record<string, SemanticRole>;
}
declare const semanticRoles: SemanticGroup[];

export { type SemanticGroup, type SemanticRole, semanticRoles };
