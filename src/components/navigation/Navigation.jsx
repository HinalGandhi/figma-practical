import { useState } from 'react';
import { Menu, Radio as RadioButton, Tag } from 'antd';
import {
  MdOutlineMail,
  MdOutlineChatBubbleOutline,
  MdCalendarToday,
  MdContentCopy,
  MdLockOpen,
  MdStarBorder,
  MdLaptopChromebook,
} from 'react-icons/md';

import Expand from '../Icons/Expand';
import { SidebarBase } from './Navigation.styles';
import { SidebarSection } from './NavigationSection';
import { SidebarItem } from './NavigationItem';

import { ReactComponent as Logo } from '../../../src/assets/icons/logo.svg';
import { ReactComponent as Radio } from '../../assets/icons/radio-checked.svg';
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Card } from '../../assets/icons/card.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Invoice } from '../../assets/icons/invoice.svg';
import { ReactComponent as Arrows } from '../../assets/icons/components.svg';
import { ReactComponent as Typography } from '../../assets/icons/typography.svg';
import { ReactComponent as Checked } from '../../assets/icons/checked.svg';
import { Link } from 'react-router-dom';

const items = ['CRM', 'Analytics', 'eCommerce'];

const Navigation = () => {
  const [selected, setSelected] = useState(items[1]);

  return (
    <SidebarBase>
      <div className="py-8">
        <Link to="/" className="logo">
          <Logo />
          <h1>MATERIO</h1>
          <Radio />
        </Link>
      </div>
      <div className="navbar-content">
        <Menu
          mode="inline"
          expandIcon={({ isOpen }) => (
            <Expand direction={isOpen ? 'up' : 'down'} />
          )}
          items={[
            {
              key: '1',
              label: (
                <>
                  <span>Dashboards</span>
                  <Tag className="error">New</Tag>
                </>
              ),
              icon: (
                <span className="icon">
                  <Home />
                </span>
              ),
              children: items.map((item) => ({
                key: item,
                label: <RadioButton color={'#3A3541DE'}>{item}</RadioButton>,
                className: item === selected ? 'active' : undefined,
                onClick: () => setSelected(item),
              })),
            },
          ]}
        />
        <SidebarSection title="Apps & Pages">
          <SidebarItem label="Email" icon={<MdOutlineMail size={20} color={'#3A3541DE'} />} />
          <SidebarItem
            label="Chat"
            icon={<MdOutlineChatBubbleOutline size={20} color={'#3A3541DE'} />}
          />
          <SidebarItem label="Calendar" icon={<MdCalendarToday size={20} color={'#3A3541DE'} />} />
          <SidebarItem label="Invoice" icon={<Invoice />} expandable />
          <SidebarItem label="User" icon={<User color={'#3A3541DE'} />} expandable />
          <SidebarItem
            label="Roles & Permissions"
            icon={<MdLockOpen size={20} color={'#3A3541DE'} />}
            expandable
          />
          <SidebarItem label="Pages" icon={<Invoice />} expandable />
          <SidebarItem
            label="Dialog Examples"
            icon={<MdContentCopy size={20} color={'#3A3541DE'} />}
          />
        </SidebarSection>
        <SidebarSection title="user interface">
          <SidebarItem label="Typography" icon={<Typography color={'#3A3541DE'} />} />
          <SidebarItem label="Icons" icon={<MdStarBorder size={24} color={'#3A3541DE'} />} />
          <SidebarItem label="Cards" icon={<Card />} expandable />
          <SidebarItem label="Components" icon={<Arrows />} expandable />
        </SidebarSection>
        <SidebarSection title="forms & tables">
          <SidebarItem label="Form Elements" icon={<Radio color={'#3A3541DE'} />} expandable />
          <SidebarItem
            label="Form Layouts"
            icon={<MdLaptopChromebook size={20} color={'#3A3541DE'} />}
          />
          <SidebarItem label="Form Validation" icon={<Checked color={'#3A3541DE'} />} />
        </SidebarSection>
      </div>
    </SidebarBase>
  );
};

export { Navigation };