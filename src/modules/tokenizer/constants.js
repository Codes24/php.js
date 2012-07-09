

var TOKEN_NONE    = -1;
var TOKEN_INVALID = 149;

var TOKEN_MAP_SIZE = 384;

var YYLAST       = 913;
var YY2TBLSTATE  = 328;
var YYGLAST      = 415;
var YYNLSTATES   = 544;
var YYUNEXPECTED = 32767;
var YYDEFAULT    = -32766;

// {{{ Tokens
var YYERRTOK = 256;
var T_INCLUDE = 262;
var T_INCLUDE_ONCE = 261;
var T_EVAL = 260;
var T_REQUIRE = 259;
var T_REQUIRE_ONCE = 258;
var T_LOGICAL_OR = 263;
var T_LOGICAL_XOR = 264;
var T_LOGICAL_AND = 265;
var T_PRINT = 266;
var T_PLUS_EQUAL = 277;
var T_MINUS_EQUAL = 276;
var T_MUL_EQUAL = 275;
var T_DIV_EQUAL = 274;
var T_CONCAT_EQUAL = 273;
var T_MOD_EQUAL = 272;
var T_AND_EQUAL = 271;
var T_OR_EQUAL = 270;
var T_XOR_EQUAL = 269;
var T_SL_EQUAL = 268;
var T_SR_EQUAL = 267;
var T_BOOLEAN_OR = 278;
var T_BOOLEAN_AND = 279;
var T_IS_EQUAL = 283;
var T_IS_NOT_EQUAL = 282;
var T_IS_IDENTICAL = 281;
var T_IS_NOT_IDENTICAL = 280;
var T_IS_SMALLER_OR_EQUAL = 285;
var T_IS_GREATER_OR_EQUAL = 284;
var T_SL = 287;
var T_SR = 286;
var T_INSTANCEOF = 288;
var T_INC = 297;
var T_DEC = 296;
var T_INT_CAST = 295;
var T_DOUBLE_CAST = 294;
var T_STRING_CAST = 293;
var T_ARRAY_CAST = 292;
var T_OBJECT_CAST = 291;
var T_BOOL_CAST = 290;
var T_UNSET_CAST = 289;
var T_NEW = 299;
var T_CLONE = 298;
var T_EXIT = 300;
var T_IF = 301;
var T_ELSEIF = 302;
var T_ELSE = 303;
var T_ENDIF = 304;
var T_LNUMBER = 305;
var T_DNUMBER = 306;
var T_STRING = 307;
var T_STRING_VARNAME = 308;
var T_VARIABLE = 309;
var T_NUM_STRING = 310;
var T_INLINE_HTML = 311;
var T_CHARACTER = 312;
var T_BAD_CHARACTER = 313;
var T_ENCAPSED_AND_WHITESPACE = 314;
var T_CONSTANT_ENCAPSED_STRING = 315;
var T_ECHO = 316;
var T_DO = 317;
var T_WHILE = 318;
var T_ENDWHILE = 319;
var T_FOR = 320;
var T_ENDFOR = 321;
var T_FOREACH = 322;
var T_ENDFOREACH = 323;
var T_DECLARE = 324;
var T_ENDDECLARE = 325;
var T_AS = 326;
var T_SWITCH = 327;
var T_ENDSWITCH = 328;
var T_CASE = 329;
var T_DEFAULT = 330;
var T_BREAK = 331;
var T_CONTINUE = 332;
var T_GOTO = 333;
var T_FUNCTION = 334;
var T_var = 335;
var T_RETURN = 336;
var T_TRY = 337;
var T_CATCH = 338;
var T_THROW = 339;
var T_USE = 340;
var T_INSTEADOF = 340;
var T_GLOBAL = 341;
var T_STATIC = 347;
var T_ABSTRACT = 346;
var T_FINAL = 345;
var T_PRIVATE = 344;
var T_PROTECTED = 343;
var T_PUBLIC = 342;
var T_VAR = 348;
var T_UNSET = 349;
var T_ISSET = 350;
var T_EMPTY = 351;
var T_HALT_COMPILER = 352;
var T_CLASS = 353;
var T_TRAIT = 364;
var T_INTERFACE = 354;
var T_EXTENDS = 355;
var T_IMPLEMENTS = 356;
var T_OBJECT_OPERATOR = 357;
var T_DOUBLE_ARROW = 358;
var T_LIST = 359;
var T_ARRAY = 360;
var T_CALLABLE = 362;
var T_CLASS_C = 361;
var T_TRAIT_C = 364;
var T_METHOD_C = 362;
var T_FUNC_C = 363;
var T_LINE = 364;
var T_FILE = 365;
var T_COMMENT = 366;
var T_DOC_COMMENT = 367;
var T_OPEN_TAG = 368;
var T_OPEN_TAG_WITH_ECHO = 369;
var T_CLOSE_TAG = 370;
var T_WHITESPACE = 371;
var T_START_HEREDOC = 372;
var T_END_HEREDOC = 373;
var T_DOLLAR_OPEN_CURLY_BRACES = 374;
var T_CURLY_OPEN = 375;
var T_PAAMAYIM_NEKUDOTAYIM = 376;
var T_DOUBLE_COLON = 376;
var T_NAMESPACE = 377;
var T_NS_C = 378;
var T_DIR = 379;
var T_NS_SEPARATOR = 380;



PHP.Constants.T_INCLUDE = 262;
PHP.Constants.T_INCLUDE_ONCE = 261;
PHP.Constants.T_EVAL = 260;
PHP.Constants.T_REQUIRE = 259;
PHP.Constants.T_REQUIRE_ONCE = 258;
PHP.Constants.T_LOGICAL_OR = 263;
PHP.Constants.T_LOGICAL_XOR = 264;
PHP.Constants.T_LOGICAL_AND = 265;
PHP.Constants.T_PRINT = 266;
PHP.Constants.T_PLUS_EQUAL = 277;
PHP.Constants.T_MINUS_EQUAL = 276;
PHP.Constants.T_MUL_EQUAL = 275;
PHP.Constants.T_DIV_EQUAL = 274;
PHP.Constants.T_CONCAT_EQUAL = 273;
PHP.Constants.T_MOD_EQUAL = 272;
PHP.Constants.T_AND_EQUAL = 271;
PHP.Constants.T_OR_EQUAL = 270;
PHP.Constants.T_XOR_EQUAL = 269;
PHP.Constants.T_SL_EQUAL = 268;
PHP.Constants.T_SR_EQUAL = 267;
PHP.Constants.T_BOOLEAN_OR = 278;
PHP.Constants.T_BOOLEAN_AND = 279;
PHP.Constants.T_IS_EQUAL = 283;
PHP.Constants.T_IS_NOT_EQUAL = 282;
PHP.Constants.T_IS_IDENTICAL = 281;
PHP.Constants.T_IS_NOT_IDENTICAL = 280;
PHP.Constants.T_IS_SMALLER_OR_EQUAL = 285;
PHP.Constants.T_IS_GREATER_OR_EQUAL = 284;
PHP.Constants.T_SL = 287;
PHP.Constants.T_SR = 286;
PHP.Constants.T_INSTANCEOF = 288;
PHP.Constants.T_INC = 297;
PHP.Constants.T_DEC = 296;
PHP.Constants.T_INT_CAST = 295;
PHP.Constants.T_DOUBLE_CAST = 294;
PHP.Constants.T_STRING_CAST = 293;
PHP.Constants.T_ARRAY_CAST = 292;
PHP.Constants.T_OBJECT_CAST = 291;
PHP.Constants.T_BOOL_CAST = 290;
PHP.Constants.T_UNSET_CAST = 289;
PHP.Constants.T_NEW = 299;
PHP.Constants.T_CLONE = 298;
PHP.Constants.T_EXIT = 300;
PHP.Constants.T_IF = 301;
PHP.Constants.T_ELSEIF = 302;
PHP.Constants.T_ELSE = 303;
PHP.Constants.T_ENDIF = 304;
PHP.Constants.T_LNUMBER = 305;
PHP.Constants.T_DNUMBER = 306;
PHP.Constants.T_STRING = 307;
PHP.Constants.T_STRING_VARNAME = 308;
PHP.Constants.T_VARIABLE = 309;
PHP.Constants.T_NUM_STRING = 310;
PHP.Constants.T_INLINE_HTML = 311;
PHP.Constants.T_CHARACTER = 312;
PHP.Constants.T_BAD_CHARACTER = 313;
PHP.Constants.T_ENCAPSED_AND_WHITESPACE = 314;
PHP.Constants.T_CONSTANT_ENCAPSED_STRING = 315;
PHP.Constants.T_ECHO = 316;
PHP.Constants.T_DO = 317;
PHP.Constants.T_WHILE = 318;
PHP.Constants.T_ENDWHILE = 319;
PHP.Constants.T_FOR = 320;
PHP.Constants.T_ENDFOR = 321;
PHP.Constants.T_FOREACH = 322;
PHP.Constants.T_ENDFOREACH = 323;
PHP.Constants.T_DECLARE = 324;
PHP.Constants.T_ENDDECLARE = 325;
PHP.Constants.T_AS = 326;
PHP.Constants.T_SWITCH = 327;
PHP.Constants.T_ENDSWITCH = 328;
PHP.Constants.T_CASE = 329;
PHP.Constants.T_DEFAULT = 330;
PHP.Constants.T_BREAK = 331;
PHP.Constants.T_CONTINUE = 332;
PHP.Constants.T_GOTO = 333;
PHP.Constants.T_FUNCTION = 334;
PHP.Constants.T_CONST = 335;
PHP.Constants.T_RETURN = 336;
PHP.Constants.T_TRY = 337;
PHP.Constants.T_CATCH = 338;
PHP.Constants.T_THROW = 339;
PHP.Constants.T_USE = 340;
//PHP.Constants.T_INSTEADOF = ;
PHP.Constants.T_GLOBAL = 341;
PHP.Constants.T_STATIC = 347;
PHP.Constants.T_ABSTRACT = 346;
PHP.Constants.T_FINAL = 345;
PHP.Constants.T_PRIVATE = 344;
PHP.Constants.T_PROTECTED = 343;
PHP.Constants.T_PUBLIC = 342;
PHP.Constants.T_VAR = 348;
PHP.Constants.T_UNSET = 349;
PHP.Constants.T_ISSET = 350;
PHP.Constants.T_EMPTY = 351;
PHP.Constants.T_HALT_COMPILER = 352;
PHP.Constants.T_CLASS = 353;
//PHP.Constants.T_TRAIT = ;
PHP.Constants.T_INTERFACE = 354;
PHP.Constants.T_EXTENDS = 355;
PHP.Constants.T_IMPLEMENTS = 356;
PHP.Constants.T_OBJECT_OPERATOR = 357;
PHP.Constants.T_DOUBLE_ARROW = 358;
PHP.Constants.T_LIST = 359;
PHP.Constants.T_ARRAY = 360;
//PHP.Constants.T_CALLABLE = ;
PHP.Constants.T_CLASS_C = 361;
PHP.Constants.T_TRAIT_C = 381;
PHP.Constants.T_METHOD_C = 362;
PHP.Constants.T_FUNC_C = 363;
PHP.Constants.T_LINE = 364;
PHP.Constants.T_FILE = 365;
PHP.Constants.T_COMMENT = 366;
PHP.Constants.T_DOC_COMMENT = 367;
PHP.Constants.T_OPEN_TAG = 368;
PHP.Constants.T_OPEN_TAG_WITH_ECHO = 369;
PHP.Constants.T_CLOSE_TAG = 370;
PHP.Constants.T_WHITESPACE = 371;
PHP.Constants.T_START_HEREDOC = 372;
PHP.Constants.T_END_HEREDOC = 373;
PHP.Constants.T_DOLLAR_OPEN_CURLY_BRACES = 374;
PHP.Constants.T_CURLY_OPEN = 375;
PHP.Constants.T_PAAMAYIM_NEKUDOTAYIM = 376;
PHP.Constants.T_DOUBLE_COLON = 376;
PHP.Constants.T_NAMESPACE = 377;
PHP.Constants.T_NS_C = 378;
PHP.Constants.T_DIR = 379;
PHP.Constants.T_NS_SEPARATOR = 380;