import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { alpha, styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import FuseNavBadge from '../../FuseNavBadge';
import FuseNavItem from '../../FuseNavItem';
import FuseSvgIcon from '../../../FuseSvgIcon';

const Root = styled(List)(({ theme, ...props }) => ({
  padding: 0,
  '&.open': {},
  '& > .fuse-list-item': {
    minHeight: 44,
    backgroundImage:
    theme.palette.mode === 'light'
    ? 'linear-gradient(90deg,#6c9cff, #4582ff)!important'
    : 'linear-gradient(90deg,#3a4f77, #081b3d)!important',
    width: '100%',
    fontFamily: 'iranSans!important',
    borderRadius: '6px',
    margin: '0 0 4px 0',
    paddingRight: 16,
    paddingLeft: props.itempadding > 80 ? 80 : props.itempadding,
    paddingTop: 10,
    paddingBottom: 10,
    color: alpha(theme.palette.text.secondary, 0.5),
    '&:hover': {
      color: theme.palette.text.secondary,
    },
    '& > .fuse-list-item-icon': {
      marginRight: 16,
      color: 'inherit',
    },
  },
  '& > .fuse-list-item-text': {
    color: alpha(theme.palette.text.secondary, 0.7),
  },
}));

function needsToBeOpened(location, item) {
  return location && isUrlInChildren(item, location.pathname);
}

function isUrlInChildren(parent, url) {
  if (!parent.children) {
    return false;
  }

  for (let i = 0; i < parent.children.length; i += 1) {
    if (parent.children[i].children) {
      if (isUrlInChildren(parent.children[i], url)) {
        return true;
      }
    }

    if (parent.children[i].url === url || url.includes(parent.children[i].url)) {
      return true;
    }
  }

  return false;
}

function FuseNavVerticalCollapse(props) {
  const [open, setOpen] = useState(() => needsToBeOpened(props.location, props.item));
  const { item, nestedLevel, onItemClick } = props;
  const itempadding = nestedLevel > 0 ? 38 + nestedLevel * 16 : 16;

  const location = useLocation();

  useEffect(() => {
    if (needsToBeOpened(location, props.item)) {
      if (!open) {
        setOpen(true);
      }
    }
    // eslint-disable-next-line
	}, [location, props.item]);

  return useMemo(
    () => (
      <Root className={clsx(open && 'open')} itempadding={itempadding} sx={item.sx}>
        <ListItem
          component={item.url ? NavLinkAdapter : 'li'}
          button
          className="fuse-list-item iranSans"
          onClick={() => setOpen(!open)}
          to={item.url}
          end={item.end}
          role="button"
          disabled={item.disabled}
        >
          {item.icon && (
            <FuseSvgIcon
              className={clsx('fuse-list-item-icon shrink-0', item.iconClass)}
              color="action"
            >
              {item.icon}
            </FuseSvgIcon>
          )}

          <ListItemText
            className="fuse-list-item-text iranSans"
            primary={item.title}
            secondary={item.subtitle}
            classes={{
              primary: 'text-18 font-medium fuse-list-item-text-primary truncate',
              secondary:
                'text-11 font-medium fuse-list-item-text-secondary leading-normal truncate',
            }}
          />

          {item.badge && <FuseNavBadge className="mx-4" badge={item.badge} />}

          <IconButton
            disableRipple
            className="w-20 h-20 -mx-12 p-0 focus:bg-transparent hover:bg-transparent"
            onClick={(ev) => ev.preventDefault()}
            size="large"
          >
            <FuseSvgIcon size={16} className="arrow-icon" color="inherit">
              {open ? 'heroicons-solid:chevron-down' : 'heroicons-solid:chevron-right'}
            </FuseSvgIcon>
          </IconButton>
        </ListItem>

        {item.children && (
          <Collapse in={open} className="collapse-children">
            {item.children.map((_item) => (
              <FuseNavItem
                key={_item.id}
                type={`vertical-${_item.type}`}
                item={_item}
                nestedLevel={nestedLevel + 1}
                onItemClick={onItemClick}
              />
            ))}
          </Collapse>
        )}
      </Root>
    ),
    [
      item.badge,
      item.children,
      item.icon,
      item.iconClass,
      item.title,
      item.url,
      itempadding,
      nestedLevel,
      onItemClick,
      open,
    ]
  );
}

FuseNavVerticalCollapse.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.array,
  }),
};
FuseNavVerticalCollapse.defaultProps = {};

const NavVerticalCollapse = FuseNavVerticalCollapse;

export default NavVerticalCollapse;
