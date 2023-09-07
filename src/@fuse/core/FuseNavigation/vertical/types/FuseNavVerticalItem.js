import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { alpha, styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import FuseNavBadge from '../../FuseNavBadge';

const Root = styled(ListItem)(({ theme, ...props }) => ({
  minHeight: 44,
  width: '100%',
  fontFamily: 'iranSans!important',
  borderRadius: '2px',
  margin: '0 0 0 0',
  backgroundImage:
  theme.palette.mode === 'light'
    ? 'linear-gradient(90deg,#6094ff, #2a70ff)!important'
    : 'linear-gradient(90deg,#3a4f77, #081b3d)!important',
  paddingTop: 0,
  paddingBottom: 0,
  color: alpha(theme.palette.text.primary, .6),
  cursor: 'pointer',
  textDecoration: 'none!important',
  '&:hover': {
    color: theme.palette.text.primary,
  },
  '&.active': {
    color: theme.palette.text.primary,
    backgroundImage:
      theme.palette.mode === 'light'
        ? 'linear-gradient(90deg, #91b4fd, #4883ff)!important'
        : 'linear-gradient(90deg, #425989, #152035)!important',
    pointerEvents: 'none',
    transition: 'border-radius .15s cubic-bezier(0.4,0.0,0.2,1)',
    '& > .fuse-list-item-text-primary': {
      color: 'inherit',
    },
  },
  '& > .fuse-list-item-text': {
    fontFamily: 'iranSans'
  },
}));

function FuseNavVerticalItem(props) {
  const { item, nestedLevel, onItemClick } = props;

  const itempadding = nestedLevel > 0 ? 38 + nestedLevel * 16 : 16;

  return useMemo(
    () => (
      <Root
        button
        component={NavLinkAdapter}
        to={item.url || ''}
        activeClassName={item.url ? 'active' : ''}
        className={clsx('fuse-list-item', item.active && 'active')}
        onClick={() => onItemClick && onItemClick(item)}
        end={item.end}
        itempadding={itempadding}
        role="button"
        sx={item.sx}
        disabled={item.disabled}
      >

        <ListItemText
          className="fuse-list-item-text iranSans"
          primary={item.title}
          secondary={item.subtitle}
          classes={{
            primary: 'text-17 font-medium fuse-list-item-text-primary truncate',
            secondary: 'text-19 font-medium fuse-list-item-text-secondary leading-normal truncate',
          }}
        />
        {item.badge && <FuseNavBadge badge={item.badge} />}
      </Root>
    ),
    [item, itempadding, onItemClick]
  );
}

FuseNavVerticalItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
  }),
};

FuseNavVerticalItem.defaultProps = {};

const NavVerticalItem = FuseNavVerticalItem;

export default NavVerticalItem;
