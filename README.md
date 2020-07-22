# Angular SVG India Map

This package is used to generate US SVG Map and also giving ability to set callback function and some parameters to change fill & stocke color.


## How to install

<pre>npm i angularindiasvgmap</pre>

## Configuration

app.module.ts

<pre>import {AngularindiasvgmapModule} from 'angularindiasvgmap';</pre>

You need to add this module in @NgModule(Imports). That's it.

## Accessing Component

<pre>&lt;india-map&gt;&lt;/india-map&gt;</pre>

## API Reference

### Inputs

|||
|-|-|
| `fillColor`      | Type: `string` Optional. Will change color of state name text. For Example: `fillColor="#C0C0C0"`       |
| `fillStateColor` | Type: `string` Optional. Will change background color of state area. For Example: `fillStateColor="#C0C0C0"` |
| `strokeColor`    | Type: `string` Optional. Will change border color of state area. For Example: `strokeColor="#C0C0C0"`     |
| `fillHoverColor`    | Type: `string` Optional. Will change state color when mouse hover. For Example: `fillHoverColor="#C0C0C0"`     |

### Output
|||
|-|-|
| `onMapClick` | Will be emitted when state area has been clicked. It returns `state abbr`. (onMapClick) event. |

Moreover, you can apply your own css to beautify this component.
