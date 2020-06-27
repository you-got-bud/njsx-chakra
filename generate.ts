import { readdirSync } from "fs-extra";
import { join } from "path";

type ChakraComponent = 'Accordion' |
  'Alert' |
  'AlertDialog' |
  'AspectRatioBox' |
  'Avatar' |
  'AvatarGroup' |
  'Badge' |
  'Box' |
  'Breadcrumb' |
  'Button' |
  'ButtonGroup' |
  'CSSReset' |
  'Callout' |
  'Checkbox' |
  'CheckboxGroup' |
  'CircularProgress' |
  'CloseButton' |
  'Code' |
  'Collapse' |
  'ColorModeProvider' |
  'ControlBox' |
  'Css' |
  'Divider' |
  'Drawer' |
  'Editable' |
  'Flex' |
  'FormControl' |
  'FormErrorMessage' |
  'FormHelperText' |
  'FormLabel' |
  'Grid' |
  'Heading' |
  'Icon' |
  'IconButton' |
  'IconPaths.js' |
  'Image' |
  'Input' |
  'InputAddon' |
  'InputElement' |
  'InputGroup' |
  'Kbd' |
  'Link' |
  'List' |
  'Menu' |
  'Modal' |
  'NumberInput' |
  'Popover' |
  'Popper' |
  'Portal' |
  'Progress' |
  'PseudoBox' |
  'README.md' |
  'Radio' |
  'RadioButtonGroup' |
  'RadioGroup' |
  'Select' |
  'SimpleGrid' |
  'Skeleton' |
  'Slider' |
  'Spinner' |
  'Stack' |
  'Stat' |
  'Switch' |
  'Tabs' |
  'Tag' |
  'Text' |
  'Textarea' |
  'ThemeProvider' |
  'Toast' |
  'Tooltip' |
  'Transition' |
  'VisuallyHidden' |


console.log(readdirSync(
  join(__dirname, "node_modules", "@chakra-ui", "core", "dist")
));
