
$token_output = (cmd /s /c findstr.exe CAUSAL_TOKEN .env)
$token=($token_output.split('=')[1])

$env_output = (cmd /s /c findstr.exe CAUSAL_ENVIRONMENT_ID .env)
$env=($env_output.split('=')[1])

$compiler_version_output = (cmd /s /c findstr.exe COMPILER_VERSION .compiler.version)
$compiler_version=($compiler_version_output.split('=')[1])

docker run --name causalc --rm -t -v "${PWD}/fdl:/fdl" -v "${PWD}/demo-ui:/demo-ui" -it causallabs/demo-compiler:$compiler_version --token "$token" --environment "$env" --config-server https://tools.causallabs.io --webhook-server https://tools.causallabs.io $args
