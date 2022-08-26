for i in header sidebar layout;
do ng g c components/layout/"${i}";
done



# I tried above not following
# in following case we have need to pass component name after file name in terminal or cmd, example  createcomponent.sh comp1 comp2 comp3 ...
# while [ "$1" != "" ]; do
#     ng g c "components/$1"
#     shift
# done