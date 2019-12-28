import block_icons from '../icons';
import './editor.scss';

const {registerBlockType} = wp.blocks;
const {__} = wp.i18n;
const {InspectorControls} = wp.blockEditor;
const {PanelBody, PanelRow, TextControl, SelectControl} = wp.components;

registerBlockType(
    'udemy/recipe',
    {
        title: __('Recipe', 'recipe'),
        description: __('Provides a short summary of a recipe.', 'recipe'),
        category: 'common',
        icon: block_icons.wapuu,
        keywords: [
            __('Food', 'recipe'),
            __('Ingredients', 'recipe'),
            __('Meal Type', 'recipe')
        ],
        supports: {
            html: false
        },
        attributes: {
            ingredients: {
                type: 'string',
                source: 'text',
                selector: '.ingredients-ph'
            },
            cooking_time: {
                type: 'string',
                source: 'text',
                selector: '.cooking-time-ph'
            },
            utensils: {
                type: 'string',
                source: 'text',
                selector: '.utensils-ph'
            },
            cooking_experience: {
                type: 'string',
                source: 'text',
                default: 'Beginner',
                selector: '.cooking-experience-ph'
            },
            meal_type: {
                type: 'string',
                source: 'text',
                default: 'Breakfast',
                selector: '.meal-type-ph'
            }
        },
        edit: (props) => {
            return [
                <InspectorControls>
                    <PanelBody title={__('Basics', 'recipe')}>
                        <PanelRow>
                            <p>{__('Configure the contents of the block here.', 'recipe')}</p>
                        </PanelRow>
                        <TextControl
                            label={__('Ingredients', 'recipe')}
                            help={__('example: tomatoes, lettuce, olive oil, etc.', 'recipe')}
                            value={props.attributes.ingredients}
                            onChange={(new_val) => {
                                props.setAttributes({ingredients: new_val})
                            }}
                        />
                        <TextControl 
                            label={__('Cooking Time', 'recipe')}
                            help={__('How long will this take to cook?', 'recipe')}
                            value={props.attributes.cooking_time}
                            onChange={(new_val) => {
                                props.setAttributes({cooking_time: new_val})
                            }}
                        />
                        <TextControl
                            label={__('Utensils', 'recipe')}
                            help={__('What Utensils will you need?', 'recipe')}
                            value={props.attributes.utensils}
                            onChange={(new_val) => {
                                props.setAttributes({utensils: new_val})
                            }}
                        />
                        <SelectControl
                            label={__( 'Cooking Experience', 'recipe')}
                            help={__('How skilled should the user be?', 'recipe')}
                            options={[
                                {value: 'Beginner', label: 'Beginner'},
                                {value: 'Intermediate', label: 'Intermediate'},
                                {value: 'Expert', label: 'Expert'}
                            ]}
                            value={props.attributes.cooking_experience}
                            onChange={(new_val) => {
                                props.setAttributes({cooking_experience: new_val})
                            }}
                        />
                        <SelectControl
                            label={__( 'Meal Type', 'recipe')}
                            help={__('When is this best eaten?', 'recipe')}
                            options={[
                                {value: 'Breakfast', label: 'Breakfast'},
                                {value: 'Lunch', label: 'Lunch'},
                                {value: 'Dinner', label: 'Dinner'}
                            ]}
                            value={props.attributes.meal_type}
                            onChange={(new_val) => {
                                props.setAttributes({meal_type: new_val})
                            }}
                        />
                    </PanelBody>
                </InspectorControls>,
                <div className={props.className}>
                    <ul class="list-unstyled">
                        <li><strong>{__('Ingredients', 'recipe')}: </strong> <span className="ingredients-ph">{props.attributes.ingredients}</span></li>
                        <li><strong>{__('Cooking Time', 'recipe')}: </strong> <span className="cooking-time-ph">{props.attributes.cooking_time}</span></li>
                        <li><strong>{__('Utensils', 'recipe')}: </strong> <span className="utensils-ph">{props.attributes.utensils}</span></li>
                        <li><strong>{__('Cooking Experience', 'recipe')}: </strong> <span className="cooking-experience-ph">{props.attributes.cooking_experience}</span></li>
                        <li><strong>{__('Meal Type', 'recipe')}: </strong> <span className="meal-type-ph">{props.attributes.meal_type}</span></li>
                    </ul>
                </div>
            ];
        },
        save: (props) => {
            return (
                <div>
                    <ul class="list-unstyled">
                        <li><strong>{__('Ingredients', 'recipe')}: </strong> <span className="ingredients-ph">{props.attributes.ingredients}</span></li>
                        <li><strong>{__('Cooking Time', 'recipe')}: </strong> <span className="cooking-time-ph">{props.attributes.cooking_time}</span></li>
                        <li><strong>{__('Utensils', 'recipe')}: </strong> <span className="utensils-ph">{props.attributes.utensils}</span></li>
                        <li><strong>{__('Cooking Experience', 'recipe')}: </strong> <span className="cooking-experience-ph">{props.attributes.cooking_experience}</span></li>
                        <li><strong>{__('Meal Type', 'recipe')}: </strong> <span className="meal-type-ph">{props.attributes.meal_type}</span></li>
                    </ul>
                </div>
            )
        }
    }
);