import { SxProps, Theme } from '@mui/material';
import React from 'react';

type IllustrationName = 'processing' | 'ok' | 'troubleshooting' | 'no-data' | 'search-empty' | 'load-error' | 'not-found' | 'forbidden' | 'restricted' | 'session-closed';
type IllustrationSize = 'large' | 'small';
interface AppIllustrationProps {
    name: IllustrationName;
    size?: IllustrationSize;
    title?: string;
    sx?: SxProps<Theme>;
}
declare const ILLUSTRATION_NAMES: IllustrationName[];
declare const AppIllustration: React.FC<AppIllustrationProps>;

export { AppIllustration, type AppIllustrationProps, ILLUSTRATION_NAMES, type IllustrationName, type IllustrationSize };
